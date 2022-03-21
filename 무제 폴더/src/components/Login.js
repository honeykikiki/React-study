import React, { useCallback } from "react";

const Login = ({ set }) => {
  const pageChange = useCallback(
    (e) => {
      e.preventDefault();
      set(false);
    },
    [set]
  );
  return (
    <>
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type={"password"} id="password" placeholder="Enter Password" />
          <br />
          <button className="login">Login</button>
          <span>or</span>
          <button className="sign" onClick={pageChange}>
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
