import React from "react";
import { useCalculator } from "../../contexts/CalculatorContext";

export const Result = () => {
  const { result } = useCalculator();

  return (
    <h1>
      {result / 1000000} m<sup>2</sup>
    </h1>
  );
};
