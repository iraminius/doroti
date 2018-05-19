import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as types from '../actions/types'

const rowsState = {
    rows: [],
    result: 0
}

const emptyRow = {
    value1: 0,
    value2: 0,
    result: 0
}

const rows = (state = rowsState, action) => {
    switch (action.type) {
    case types.ADD_ROWS:
        return {
            ...state,
            rows: (() => {
                let rows = []
                for(let i = 0; i < action.data; i++) {
                    rows = rows.concat(emptyRow)
                }
                return rows
            })()
        }
    case types.REMOVE_ROW:
        return {
            ...state,
            rows: state.rows.slice(0, action.data).concat(state.rows.slice(action.data + 1, state.rows.length))
        }
    case types.UDATE_RESULT:
        return {
            ...state,
            result: state.rows.map(row => {
                return row.result
            }).reduce((prev, current) => {
                return prev + current
            })
        }
    case types.UPDATE_ROW:
        return {
            ...state,
            rows: (() => {
                let rows = state.rows
                rows[action.data.index] = {
                    value1: parseInt(action.data.value1),
                    value2: parseInt(action.data.value2),
                    result: action.data.value1 * action.data.value2
                }
                return rows
            })()
        }
    default:
        return state
    }
}

const rootReducer = combineReducers({
    rows,
    routing
})

export default rootReducer