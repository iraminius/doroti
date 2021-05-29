import React from "react";
import PropTypes from "prop-types";

import {
  CalculationField,
  CalculationInput,
  Container,
  QuantityField,
  QuantityInput,
  RowResult,
} from "./CalculationRow.styles";
import { useCalculator } from "../../CalculatorContext";

export const CalculationRow = ({ row }) => {
  const { updateRow } = useCalculator();

  const handleFocus = (event) => {
    event.target.select();
  };

  const handleChange = (event) => {
    const updatedRow = {
      ...row,
      [event.target.name]: parseInt(event.target.value),
    };
    updatedRow.result =
      updatedRow.width * updatedRow.height * updatedRow.quantity;
    updateRow(updatedRow);
  };

  return (
    <Container data-row-result={row.result}>
      <CalculationField>
        <CalculationInput
          name="width"
          type="number"
          value={row.width}
          onChange={handleChange}
          onClick={handleFocus}
        />
      </CalculationField>
      <CalculationField>
        <CalculationInput
          name="height"
          type="number"
          value={row.height}
          onChange={handleChange}
          onClick={handleFocus}
        />
      </CalculationField>
      <QuantityField>
        <QuantityInput
          name="quantity"
          type="number"
          value={row.quantity}
          onChange={handleChange}
          onClick={handleFocus}
        />
      </QuantityField>
      <RowResult>
        {row.result / 1000000} m<sup>2</sup>
      </RowResult>
    </Container>
  );
};

CalculationRow.propTypes = {
  row: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
  }),
};

CalculationRow.displayName = "CalculationRow";
