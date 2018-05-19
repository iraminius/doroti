import * as types from './types'

export function addRows(rowsAmount) {
    return {
        type: types.ADD_ROWS,
        data: rowsAmount
    }
}

export function removeRow(rowIndex) {
    return {
        type: types.REMOVE_ROW,
        data: rowIndex
    }
}

export function updateResult() {
    return {
        type: types.UDATE_RESULT
    }
}

export function updateRow(rowData) {
    return {
        type: types.UPDATE_ROW,
        data: rowData
    }
}