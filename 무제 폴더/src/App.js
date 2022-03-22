import { useState } from "react";

import "./style/App.css";
import LoginForm from "./components/LoginForm";
import MainHome from "./components/MainHome";

function App() {
  const [done, setDone] = useState();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

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
