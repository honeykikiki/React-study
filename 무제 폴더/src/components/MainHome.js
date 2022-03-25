import React, { useCallback, useContext } from "react";
import { UserContext } from "../store";

const MainGome = () => {
  const { setDone, setId, setPw, id, pw } = useContext(UserContext);

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
              <div>{id}</div>
            </div>
            <div className="log" onClick={logout}>
              logout
            </div>
          </div>
        </header>
        <div className="info">
          <p>id : {id}</p>
          <p>pw : {pw}</p>
        </div>
      </div>
    </>
  );
};

export default MainGome;
