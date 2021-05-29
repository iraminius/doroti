import React from "react";
import { useCalculator } from "../../CalculatorContext";
import {
  Actions,
  MainResult,
  PrintButton,
  ResetButton,
  ResultWrapper,
  SubResult,
} from "./Result.styles";

export const Result = () => {
  const { result, reset } = useCalculator();

  const print = () => {
    window.print();
  };

  return (
    <ResultWrapper>
      <MainResult>
        {result / 1000000} m<sup>2</sup>
      </MainResult>
      <SubResult>
        {result} mm<sup>2</sup>
      </SubResult>
      <Actions>
        <ResetButton onClick={reset}>RESET</ResetButton>
        <PrintButton onClick={print}>DRUKUJ</PrintButton>
      </Actions>
    </ResultWrapper>
  );
};
