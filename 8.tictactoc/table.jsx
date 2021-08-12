import React, { useState } from "react";
import Tr from "./tr";

const Table = ({ tableData }) => {
  return (
    <>
      <table>
        <tbody>
          {Array(tableData.length)
            .fill()
            .map((tr, i) => (
              <Tr key={i} rowIndex={i} rowData={tableData[i]} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
