import React from "react";
import { useCalculator } from "../../contexts/CalculatorContext";
import { MainResult, ResultWrapper, SubResult } from "./Result.styles";

export const Result = () => {
  const { result } = useCalculator();

  return (
    <ResultWrapper>
      <MainResult>
        {result / 1000000} m<sup>2</sup>
      </MainResult>
      <SubResult>
        {result} mm<sup>2</sup>
      </SubResult>
    </ResultWrapper>
  );
};
