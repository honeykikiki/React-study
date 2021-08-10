import React, { PureComponent } from "react";
import RSPbutton from "./RSPbutton";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  바위: 0,
  가위: 1,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends PureComponent {
  state = {
    result: "",
    imgCoord: rspCoords.바위,
    score: 0,
    clickable: true,
  };

  interval;

  componentDidMount() {
    //컴포넌트가 첫 랜더링 된 후 비동기 요청을 많이한다
    this.interval = setInterval(this.changeHand, 100);
  }
  componentDidUpdate() {
    // 리랜더링 후
  }
  componentWillUnmount() {
    //컴포넌트가 제거되기 직전 비동기 요청 정리
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  onClickBtn = (choice) => () => {
    const { imgCoord, clickable } = this.state;
    if (clickable) {
      clearInterval(this.interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.setState({
          result: "비겼습니다!",
        });
      } else if ([-1, 2].includes(diff)) {
        this.setState((prevState) => {
          return {
            result: "이겼습니다!",
            score: prevState.score + 1,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            result: "졌습니다!",
            score: prevState.score - 1,
          };
        });
      }
      setTimeout(() => {
        this.interval = setInterval(this.changeHand, 1000);
      }, 1000);
    }
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{ background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}
        />
        <RSPbutton
          R={this.onClickBtn("바위")}
          S={this.onClickBtn("가위")}
          P={this.onClickBtn("보")}
          result={result}
          score={score}
        />
      </>
    );
  }
}

export default RSP;
