import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import produce from "immer";

import { useStorageState } from "./hooks/useStorageState";
import { rowsSchema } from "./schemas";

const CalculatorContext = React.createContext(null);

const initialRows = Array.from(Array(50).keys()).map((count) => ({
  id: count,
  width: 0,
  height: 0,
  quantity: 1,
  result: 0,
}));

export const CalculatorProvider = ({ children }) => {
  const [rows, setRows] = useStorageState("rows", initialRows, rowsSchema);
  const [result, setResult] = useStorageState("result", 0, yup.number());

  const updateRow = (updatedRow) => {
    const rowIndex = rows.findIndex((row) => row.id === updatedRow.id);

    const updatedRows = produce(rows, (draftRows) => {
      draftRows[rowIndex] = updatedRow;
    });

    setRows(updatedRows);
  };

  // const addRow = () => {
  //   setRows([...rows, { width: 0, height: 0, quantity: 1, result: 0 }]);
  // };

  // const removeRow = (index) => {
  //   const updatedRows = [...rows];
  //   updatedRows.splice(index, 1);
  //   setRows(updatedRows);
  // };

  const reset = () => {
    setRows(initialRows);
    setResult(0);
  };

  useEffect(() => {
    let tempResult = 0;
    rows.forEach((row) => (tempResult += row.result));
    setResult(tempResult);
  }, [rows]);

  return (
    <CalculatorContext.Provider
      value={{
        result,
        rows,
        updateRow,
        // addRow,
        // removeRow,
        reset,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * @typedef {Object} CalculatorContext
 * @property {number} result - Calculator result
 * @property {array} rowsResults
 * @property {function} updateRow
 * @property {function} addRow
 * @property {function} removeRow
 */

/**
 *
 * @returns {CalculatorContext}
 */
export const useCalculator = () => useContext(CalculatorContext);
