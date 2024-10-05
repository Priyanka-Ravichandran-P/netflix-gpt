import React, { useRef, useState } from "react";
import { isInputValid } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { doSignUpUser, dosignInUser } from "../services/userService";
import { auth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux-utils/userSlice";
import Loader from "./Loader";

const SignUp = () => {
  const [isSignUP, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleOnsubmit = (event) => {
    event.preventDefault();
  };
  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const validateForm = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userName = nameRef?.current?.value;
    if (isSignUP) {
      const message = isInputValid(email, password, userName, isSignUP);
      if (message) {
        setErrorMessage(message);
        return;
      }
      signUpUser(email, password);
    } else {
      signInUser(email, password);
    }
  };

  const signInUser = async (email, password) => {
    const response = await dosignInUser(email, password);
    if (response.status === true) {
      await doListenUserSession();
      setErrorMessage("");
      navigate("/browse");
    } else {
      setErrorMessage(response.message);
    }
  };

  const signUpUser = async (email, password) => {
    setErrorMessage("");
    setLoader(true);
    const response = await doSignUpUser(email, password);
    if (response.status === true) {
      setIsSignUp(false);
      setErrorMessage("");
    } else {
      setErrorMessage(response.message);
    }
    setLoader(false);
  };

  const doListenUserSession = async () => {
    onAuthStateChanged(auth, (user) => {
      // Event Listener
      if (user) {
        const { uid, email, displayName } = user;
        console.log(" User Signed in  event : ", user);
        dispatch(addUser({ uid, email, displayName }));
      } else {
        console.log(" User Signed out  event : ");
        dispatch(removeUser());
      }
    });
  };

  return (
    <section className="absolute w-1/3 h-auto top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/4">
      <form onSubmit={handleOnsubmit}>
        <div className="m-4 p-4 w-50 bg-black bg-opacity-75 border-black rounded-md ">
          <div className="p-10 h-auto">
            <div className="p-4 w-full">
              <label className="text-3xl text-start font-bold text-white">
                {isSignUP === false ? "Sign In" : "Sign Up"}
              </label>
            </div>
            {isSignUP === true ? (
              <div className="p-4 ">
                <input
                  type="text"
                  ref={nameRef}
                  className="h-10 p-2 w-full bg-transparent border border-white text-white rounded-sm"
                  placeholder="User Name"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="p-4 ">
              <input
                type="text"
                ref={emailRef}
                className="h-10 p-2 w-full bg-transparent border border-white text-white rounded-sm"
                placeholder="Email"
              />
            </div>
            <div className="p-4">
              <input
                type="password"
                ref={passwordRef}
                className="h-10 p-2 w-full bg-transparent border border-white text-white rounded-sm"
                placeholder="Password"
              />
            </div>
            {isLoader === true ? (
              <div className="p-4">
                <Loader />
              </div>
            ) : (
              <div className="p-4">
                <button
                  type="submit"
                  onClick={validateForm}
                  className="bg-red-600 font-bold text-white w-full h-10 rounded-sm"
                >
                  {isSignUP === false ? "Sign In" : "Sign Up"}
                </button>
              </div>
            )}
            {errorMessage ? (
              <div className="p-4 w-full">
                <span className=" text-start text-md text-red-500">
                  {errorMessage}
                </span>
              </div>
            ) : (
              <></>
            )}

            <div className="p-4 w-full">
              <span className=" text-start  text-white">
                New to Netflix?{" "}
                <span
                  className="font-bold hover:underline cursor-pointer"
                  onClick={handleSignUp}
                >
                  {" "}
                  Sign up now{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
