import React, { useCallback } from "react";

const SignUp = ({ set }) => {
  const pageChange = useCallback(
    (e) => {
      e.preventDefault();
      set(true);
    },
    [set]
  );
  return (
    <>
      <div>
        <h2>Sign up</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type={"password"} id="password" placeholder="Enter Password" />
          <br />
          <label htmlFor="phone">Phone number</label>
          <input type={"password"} id="phone" placeholder="Enter Phone Number" />
          <br />
          <button className="sign_up">Sign up</button>
          <button className="sign_up" onClick={pageChange}>
            back
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
