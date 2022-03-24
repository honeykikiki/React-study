import React, { useCallback, useContext } from "react";
import { UserContext } from "../store";

const Login = ({ set }) => {
  const { setId, setPw, setDone, id, pw } = useContext(UserContext);
  console.log(id);
  console.log(pw);
  const pageChange = useCallback((e) => {
    e.preventDefault();
  }, []);

  const passwordChange = useCallback(
    (e) => {
      setPw(e.target.value);
    },
    [setPw]
  );

  const emailChange = useCallback(
    (e) => {
      setId(e.target.value);
    },
    [setId]
  );

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      if (id && pw) {
        setDone(true);
        return;
      }
      alert("아이디 비밀번호를 작성해주세요!");
    },
    [id, pw, setDone]
  );

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={submit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Email" onChange={emailChange} />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            placeholder="Enter Password"
            onChange={passwordChange}
          />
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
