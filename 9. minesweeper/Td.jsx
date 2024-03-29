import React, { useCallback, useContext } from "react";
import { CLICK_MINE, CODE, OPEN_CELL, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL, TableContext } from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#888",
      };
    case CODE.CLICKES_MINE:
    case CODE.OPENED:
      return {
        background: "#fff",
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: "yellow",
      };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: "red",
      };
    default:
      return {
        background: "#fff",
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.CLICKES_MINE:
      return "펑";
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return " !";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return "?";
    default:
      return code || "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const omClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
    // dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e) => {
      if (halted) {
        return;
      }
      e.preventDefault();
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return (
    <>
      <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={omClickTd} onContextMenu={onRightClickTd}>
        {getTdText(tableData[rowIndex][cellIndex])}
      </td>
    </>
  );
};

export default Td;
