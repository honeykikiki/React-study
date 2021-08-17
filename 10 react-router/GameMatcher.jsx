import React, { Component } from "react";
import NumberBaseball from "../4.numberbaseBall/NumberBaseball";
import RSP from "../6.rsp/RSP";
import Lotto from "../7.lotto/lotto";
// import { withRouter } from "react";

class GameMatcher extends Component {
  state = {};
  render() {
    console.log(this.props.match, this.props);
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSP />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <Lotto />;
    }
    return (
      <>
        <div>일치하는 정보가없습니다</div>
      </>
    );
  }
}

export default GameMatcher;
