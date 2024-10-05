import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const dosignInUser = async (email, password) => {
  let response = {
    status: false,
    message: "",
  };
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(" user:: ", user);
      response.status = true;
      response.message = "success";
      return response;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      response.message = errorCode + " - " + errorMessage;
      return response;
    });  
};

export const doSignUpUser = async (email, password) => {
  let response = {
    status: false,
    message: "",
  };
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(" user:: ", user);
      response.status = true;
      response.message = "success";
      return response;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      response.message = errorCode + " - " + errorMessage;
      return response;
    });

};


