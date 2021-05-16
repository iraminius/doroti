import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CalculatorContext = React.createContext(null);

const initialRowsResults = Array.from(Array(50).keys()).map(() => 0);

export const CalculatorProvider = ({ children }) => {
  const [rowsResults, setRowsResults] = useState(initialRowsResults);
  const [result, setResult] = useState(0);

  const updateRow = (index, result) => {
    console.log("update", index, result);
    const newRowsResults = [...rowsResults];
    newRowsResults[index] = result;
    setRowsResults(newRowsResults);
  };

  const addRow = () => {
    setRowsResults([...rowsResults, 0]);
  };

  const removeRow = (index) => {
    const newRowsResults = [...rowsResults];
    newRowsResults.splice(index, 1);
    setRowsResults(newRowsResults);
  };

  useEffect(() => {
    setResult(
      rowsResults.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      )
    );
  }, [rowsResults]);

  return (
    <CalculatorContext.Provider
      value={{
        result,
        rowsResults,
        updateRow,
        addRow,
        removeRow,
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
