import React, { createContext, useState } from "react";

export const UserContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function Store(props) {
  // props로 지정하고 싶은 상태를 만들어준다.
  const [done, setDone] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <UserContext.Provider
      value={{
        done,
        id,
        pw,
        setDone,
        setId,
        setPw,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default Store;
