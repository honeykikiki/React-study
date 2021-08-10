<<<<<<< HEAD
import React, { Component, memo } from "react";
// import React, { PureComponent, memo, useState } from "react";

// class Try extends PureComponent {
//   // shouldComponentUpdate(nextProps, nextState, nextContext) {
//   //   if (this.props.tryInfo.try == nextState) {
//   //     return true;
//   //   }
//   //   false;
//   // }
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: "this.props.result",
//       try: this.props.try,
//     };
//   }

//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//         <div>{this.state.result}</div>
//       </li>
//     );
//   }
// }

const Try = memo(({ tryInfo }) => {
  const [result, setResult] = useState(tryInfo.result);

  const onClick = () => {
    setResult("1");
  };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  );
});

=======
import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    );
  }
}

>>>>>>> parent of 26111da (setTimeout)
export default Try;
