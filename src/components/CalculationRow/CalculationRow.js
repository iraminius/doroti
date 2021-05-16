import React, { useRef, memo } from "react";
import PropTypes from "prop-types";

import {
  CalculationField,
  CalculationInput,
  Container,
  QuantityField,
  QuantityInput,
  RowResult,
} from "./CalculationRow.styles";
import { useCalculator } from "../../contexts/CalculatorContext";

export const CalculationRow = memo(
  ({ index }) => {
    console.log("render row", index);

    const input1Ref = useRef();
    const input2Ref = useRef();
    const quantityRef = useRef();
    const resultRef = useRef(0);

    const { updateRow } = useCalculator();

    const handleChange = () => {
      const value1 = input1Ref.current.value ?? 0;
      const value2 = input2Ref.current.value ?? 0;
      const quantity = quantityRef.current.value ?? 0;
      const result = value1 * value2 * quantity;
      resultRef.current = result;
      updateRow(index, result);
    };

    return (
      <Container>
        <CalculationField>
          <CalculationInput
            type="number"
            onChange={handleChange}
            ref={input1Ref}
          />
        </CalculationField>
        <CalculationField>
          <CalculationInput
            type="number"
            onChange={handleChange}
            ref={input2Ref}
          />
        </CalculationField>
        <QuantityField>
          <QuantityInput
            type="number"
            onChange={handleChange}
            ref={quantityRef}
            defaultValue={1}
          />
          <label>sztuk</label>
        </QuantityField>
        <RowResult>{resultRef.current} mm</RowResult>
      </Container>
    );
  },
  (prevProps, nextProps) => {
    console.log(
      "are props equal",
      prevProps.index,
      nextProps.index,
      prevProps.index === nextProps.index
    );
    return prevProps.index === nextProps.index;
  }
);

CalculationRow.propTypes = {
  index: PropTypes.number.isRequired,
};

CalculationRow.displayName = "CalculationRow";
