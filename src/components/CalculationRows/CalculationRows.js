import React from "react";

import { useCalculator } from "../../contexts/CalculatorContext";
import { CalculationRow } from "../CalculationRow/CalculationRow";

export const CalculationRows = () => {
  const { rows } = useCalculator();

  return rows.map((row, index) => (
    <CalculationRow key={index} index={index} row={row} />
  ));
};
