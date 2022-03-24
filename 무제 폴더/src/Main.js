import React, { useContext } from "react";
import LoginForm from "./components/LoginForm";
import MainGome from "./components/MainHome";
import { UserContext } from "./store";

const Main = () => {
  const { done } = useContext(UserContext);
  console.log(done);
  return (
    <>
      <div>{done ? <MainGome /> : <LoginForm />}</div>
    </>
  );
};

export default Main;
