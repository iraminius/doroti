export type Millimeter = number;

export type Meter = number;

export type CalculatorRowData = {
    id: number;
    width: Millimeter;
    height: Millimeter;
    quantity: number;
    result: Millimeter;
};

export type CalculatorData = {
    rowCollection: Array<CalculatorRowData>;
    result: Meter;
};
