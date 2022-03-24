import "./style/App.css";
import Store from "./store";
import Main from "./Main";

function App() {
  return (
    <Store>
      <div className="App">
        <Main />
      </div>
    </Store>
  );
}
export default App;
