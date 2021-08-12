import React, { useState, useReducer, useCallback } from "react";
import Table from "./table";
const initialState = {
  winner: "",
  turn: "",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

export const SET_WINNER = '"SET_WINNER';
export const CLICK_CELL = '"CLICK_CELL';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner 이렇게 바꾸면 안됨
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      return {
        ...state,
      };
  }
};

const TicTacToc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("");
  // const [tableDate, settTbleDate] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);

  return (
    <>
      <Table tableData={state.tableData} />
      {state.winner && <div>{state.winner}님 승리</div>}
    </>
  );
};

export default TicTacToc;
