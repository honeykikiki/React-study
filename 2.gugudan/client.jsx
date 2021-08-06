const React = require("react");
const ReactDom = require("react-dom");

const GuGudDan = require("./GuGUDna");

ReactDom.render(
  <React.Fragment>
    <GuGudDan />
  </React.Fragment>,
  document.querySelector("#root")
);

// ReactDom.render(<WordRelay />, document.querySelector("#root"));
