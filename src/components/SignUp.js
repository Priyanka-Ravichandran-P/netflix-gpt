import React, { useRef, useState } from "react";
import { isInputValid } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

const SignUp = () => {
  const [isSignUP, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setErrorMessage("");
        const user = userCredential.user;
        console.log(" user:: ", user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };

  const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setErrorMessage("");
        const user = userCredential.user;
        console.log(" user:: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
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
            <div className="p-4">
              <button
                type="submit"
                onClick={validateForm}
                className="bg-red-600 font-bold text-white w-full h-10 rounded-sm"
              >
                {isSignUP === false ? "Sign In" : "Sign Up"}
              </button>
            </div>
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
