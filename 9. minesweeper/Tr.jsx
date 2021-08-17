import React, { useContext, useState } from "react";
import Td from "./Td";
import { TableContext } from "./MineSearch";

const Table = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <>
      <tr>
        {tableData[0] &&
          Array(tableData[0].length)
            .fill()
            .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
      </tr>
    </>
  );
};

export default Table;
