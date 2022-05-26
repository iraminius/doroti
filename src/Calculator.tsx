import styled from '@emotion/styled';
import produce from 'immer';
import { useCallback, useState } from 'react';

import { CalculationRow } from './CalculationRow';
import { CalculatorData, CalculatorRowData } from './types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
`;

const initialData: CalculatorData = {
    rowCollection: Array.from(Array(5).keys()).map((count) => ({
        id: count,
        width: 0,
        height: 0,
        quantity: 1,
        result: 0,
    })),
    result: 0,
};

export const Calculator = () => {
    const [rowDataCollection, setRowDataCollection] = useState(initialData.rowCollection);

    const updateRow = useCallback(
        (updatedRowData: CalculatorRowData) =>
            setRowDataCollection(
                produce((draft) => {
                    const rowIndex = draft.findIndex((rowData) => rowData.id === updatedRowData.id);
                    draft[rowIndex] = updatedRowData;
                })
            ),
        []
    );

    return (
        <Container>
            <p>
                {parseFloat(
                    (
                        rowDataCollection.reduce((previousValue, rowData) => previousValue + rowData.result, 0) /
                        1000000
                    ).toFixed(3)
                )}
                m<sup>2</sup>
            </p>
            {rowDataCollection.map((rowData) => (
                <CalculationRow key={rowData.id} rowData={rowData} onChange={updateRow} />
            ))}
        </Container>
    );
};
