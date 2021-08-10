// import React, { Component, memo } from "react";
import React, { PureComponent, memo, useState } from "react";

class Try extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.props.tryInfo.try == nextState) {
  //     return true;
  //   }
  //   false;
  // }
  constructor(props) {
    super(props);
    this.state = {
      result: "this.props.result",
      try: this.props.try,
    };
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
        <div>{this.state.result}</div>
      </li>
    );
  }
}

// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result);

//   const onClick = () => {
//     setResult("1");
//   };
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{result}</div>
//     </li>
//   );
// });

export default Try;
