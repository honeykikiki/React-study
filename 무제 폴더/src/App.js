import { createContext } from "react";

import "./style/App.css";
import LoginForm from "./components/LoginForm";
import MainHome from "./components/MainHome";

const Store = createContext({
  userId: null,
  userPw: null,
});

function App() {
  return (
    <>
      <div className="App">
        <div>
          <LoginForm />
          {/* <MainHome /> */}
        </div>
      </div>
    </>
  );
}

export default App;
