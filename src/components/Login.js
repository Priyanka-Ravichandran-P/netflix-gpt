import React from "react";
import Logo from "./Logo.js";
import SignUp from "./SignUp";

const Login = () => {
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg"
        alt="MoviesCollection"
        className="absolute w-screen placeholder-opacity-45"
      />
      <div className="absolute ml-20 mt-1 mb-1 pl-10 pr-10 w-auto">
        <Logo />
      </div>
      <SignUp />
    </div>
  );
};

export default Login;
