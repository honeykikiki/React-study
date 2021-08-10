// import React, { PureComponent } from "react";
import React, { memo, useState } from "react";

// class RSPbutton extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       R: this.props.R,
//       P: this.props.P,
//       S: this.props.S,
//       result: this.props.result,
//       score: this.props.score,
//     };
//   }

//   render() {
//     const { R, P, S, result, score } = this.props;
//     return (
//       <>
//         <div>
//           <button id="rock" className="btn" onClick={R}>
//             바위
//           </button>
//           <button id="scissor" className="btn" onClick={P}>
//             가위
//           </button>
//           <button id="paper" className="btn" onClick={S}>
//             보
//           </button>
//         </div>
//         <div>{result}</div>
//         <div>현재 {score}점</div>
//       </>
//     );
//   }
// }

const RSPbutton = memo(({ R, P, S, result, score }) => {
  const [r, setR] = useState(R);
  const [p, setP] = useState(P);
  const [s, setS] = useState(S);
  const [Result, setResult] = useState(result);
  const [Score, setScore] = useState(score);

  return (
    <>
      <div>
        <button id="rock" className="btn" onClick={R}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={P}>
          가위
        </button>
        <button id="paper" className="btn" onClick={S}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
});

export default RSPbutton;
