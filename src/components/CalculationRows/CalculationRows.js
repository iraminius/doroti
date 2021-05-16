import React from "react";

import { useCalculator } from "../../contexts/CalculatorContext";
import { CalculationRow } from "../CalculationRow/CalculationRow";
import { Container } from "./CalculationRows.styles";

export const CalculationRows = () => {
  const { rows } = useCalculator();

  return (
    <Container>
      {rows.map((row, index) => (
        <CalculationRow key={index} index={index} row={row} />
      ))}
    </Container>
  );
};
