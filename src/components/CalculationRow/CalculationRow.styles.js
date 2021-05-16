import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const CalculationField = styled.div`
  width: 180px;
  display: flex;
`;

export const CalculationInput = styled.input`
  width: 100%;
  height: min-content;
  font-size: 16px;
`;

export const QuantityField = styled.div`
  width: auto;
  display: flex;
`;

export const QuantityInput = styled.input`
  margin-left: 8px;
  margin-right: 2px;
  width: 48px;
  height: min-content;
  font-size: 16px;
`;

export const RowResult = styled.p`
  display: inline-block;
  margin: 0 0 0 16px;
  width: 100%;
  text-align: right;
`;
