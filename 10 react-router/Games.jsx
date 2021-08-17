import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import NumberBaseball from "../4.numberbaseBall/NumberBaseball";
import RSP from "../6.rsp/RSP";
import Lotto from "../7.lotto/lotto";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          {/* 공통인부분 */}
          <Link to="/game/number-baseball?query=10&hello=honey&bye=react">숫자야구</Link>
          &nbsp;
          <Link to="/game/rock-scissors-paper">가위바위보</Link>
          &nbsp;
          <Link to="/game/lotto-generator">로또</Link>
          &nbsp;
          <Link to="/game/index">게임매쳐</Link>
        </div>
        <div>
          바뀌는부분
          <Route path="/game/:name" component={GameMatcher}></Route>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Games;
