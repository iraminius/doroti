import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addRows, removeRow } from '../actions/index'
import CalculationRow from './CalculationRow'

import './calculator.less'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.addRows(15)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.rows.map((row, index) => {
                        return <li key={index}>
                            <CalculationRow index={index}/>
                        </li>
                    })}
                </ul>
                <label>{this.props.result}</label>
            </div>
        )
    }
}

Calculator.propTypes = {
    rows: PropTypes.array.isRequired,
    result: PropTypes.number.isRequired,
    addRows: PropTypes.func.isRequired,
    removeRow: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    rows: state.rows.rows,
    result: state.rows.result
})

const mapDispatchToProps = dispatch => ({
    addRows: rowsAmount => {
        dispatch(addRows(rowsAmount))
    },
    removeRow: rowIndex => {
        dispatch(removeRow(rowIndex))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)