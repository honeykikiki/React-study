import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginForm = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="wrap">
        <div>
          <h1>PROJECT</h1>
        </div>
        <div className="form_box">
          {click ? <Login set={setClick} /> : <SignUp set={setClick} />}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
