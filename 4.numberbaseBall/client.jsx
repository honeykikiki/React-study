import React from "react";
import ReactDom from "react-dom";
// import { hot } from "react-hot-loader/root"; //

import NumberBaseball from "./NumberBaseball";

// const hot = hot(NumberBaseball);

ReactDom.render(<NumberBaseball />, document.querySelector("#root"));
