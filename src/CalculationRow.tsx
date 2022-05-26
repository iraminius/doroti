import styled from '@emotion/styled';
import { memo } from 'react';

import { CalculatorRowData } from './types';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 64px;
    text-align: center;
    margin-right: 8px;
`;

const QuantityInput = styled.input`
    width: 32px;
    text-align: center;
    margin-left: 16px;
`;

const Result = styled.p`
    margin: 0;
    width: 64px;
    text-align: center;
    margin-left: 16px;
`;

type CalculationRowProps = {
    rowData: CalculatorRowData;
    onChange: (updatedRowData: CalculatorRowData) => void;
};

export const CalculationRow = memo(({ rowData, onChange }: CalculationRowProps) => {
    const calculateRowResult = (width: number, height: number, quantity: number) => width * height * quantity;

    return (
        <Container>
            <Input
                type="number"
                value={rowData.width.toString()}
                onChange={(e) => {
                    const width = e.currentTarget.valueAsNumber || 0;
                    onChange({
                        ...rowData,
                        width,
                        result: calculateRowResult(width, rowData.height, rowData.quantity),
                    });
                }}
            />
            <Input
                type="number"
                value={rowData.height.toString()}
                onChange={(e) => {
                    const height = e.currentTarget.valueAsNumber || 0;
                    onChange({
                        ...rowData,
                        height,
                        result: calculateRowResult(rowData.width, height, rowData.quantity),
                    });
                }}
            />
            <QuantityInput
                type="number"
                value={rowData.quantity.toString()}
                onChange={(e) => {
                    const quantity = e.currentTarget.valueAsNumber || 0;
                    onChange({
                        ...rowData,
                        quantity,
                        result: calculateRowResult(rowData.width, rowData.height, quantity),
                    });
                }}
            />

            <Result>
                {parseFloat((rowData.result / 1000000).toFixed(3))}m<sup>2</sup>
            </Result>
        </Container>
    );
});

CalculationRow.displayName = 'CalculationRow';
