import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CalculatorContext = React.createContext(null);

const initialRows = Array.from(Array(50).keys()).map(() => ({
  width: 0,
  height: 0,
  quantity: 1,
  result: 0,
}));

export const CalculatorProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rows, setRows] = useState(initialRows);
  const [result, setResult] = useState(0);

  const updateRow = (index, row) => {
    const updatedRows = [...rows];
    updatedRows[index] = row;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { width: 0, height: 0, quantity: 1, result: 0 }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const reset = () => {
    setRows(initialRows);
    setResult(0);
  };

  useEffect(() => {
    let tempResult = 0;
    rows.forEach((row) => (tempResult += row.result));
    setResult(tempResult);
  }, [rows]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("rows", JSON.stringify(rows));
      localStorage.setItem("result", result);
    }
  }, [rows, result]);

  useEffect(() => {
    if (!isLoaded) {
      const savedRows = JSON.parse(localStorage.getItem("rows"));
      const savedResult = localStorage.getItem("result");
      setRows(savedRows || initialRows);
      setResult(savedResult || 0);
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <CalculatorContext.Provider
      value={{
        result,
        rows,
        updateRow,
        addRow,
        removeRow,
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
