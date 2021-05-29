import React from "react";

import { Container } from "./Calculator.styles";
import { CalculatorProvider } from "../../CalculatorContext";
import { Result } from "../Result/Result";
import { CalculationRows } from "../CalculationRows/CalculationRows";

const CalculatorInner = () => {
  return (
    <Container>
      <h1>Doroti</h1>
      <Result />
      <CalculationRows />
    </Container>
  );
};

export const Calculator = () => {
  return (
    <CalculatorProvider>
      <CalculatorInner />
    </CalculatorProvider>
  );
};
