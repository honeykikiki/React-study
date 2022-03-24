import React, { useCallback, useContext } from "react";
import { UserContext } from "../store";

const MainGome = () => {
  const { setDone, setId, setPw } = useContext(UserContext);

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      setDone(false);
      setId();
      setPw();
    },
    [setDone, setId, setPw]
  );
  return (
    <>
      <div>
        <header>
          <h1>PROJECT</h1>
          <div className="box">
            <div className="profile">
              <div></div>
              <div>abs123</div>
            </div>
            <div className="log" onClick={logout}>
              logout
            </div>
          </div>
        </header>
        <div>{/* 아이디 비번 넣기 */}</div>
      </div>
    </>
  );
};

export default MainGome;
