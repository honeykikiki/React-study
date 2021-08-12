import React, { useState } from "react";
import Td from "./td";

const Tr = ({ rowData, rowIndex }) => {
  return (
    <>
      <tr>
        {Array(rowData.length)
          .fill()
          .map((td, i) => (
            <Td key={i} rowIndex={rowIndex} cellIndex={i} />
          ))}
      </tr>
    </>
  );
};

export default Tr;
