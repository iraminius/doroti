import React from "react";

import { useCalculator } from "../../CalculatorContext";
import { CalculationRow } from "../CalculationRow/CalculationRow";
import { Container } from "./CalculationRows.styles";

export const CalculationRows = () => {
  const { rows } = useCalculator();

  return (
    <Container>
      {rows.map((row) => (
        <CalculationRow key={row.id} row={row} />
      ))}
    </Container>
  );
};
