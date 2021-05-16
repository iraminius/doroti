import React from "react";

import { useCalculator } from "../../contexts/CalculatorContext";
import { CalculationRow } from "../CalculationRow/CalculationRow";

export const CalculationRows = () => {
  const { rowsResults } = useCalculator();

  return rowsResults.map((_, index) => (
    <CalculationRow key={index} index={index} />
  ));
};
