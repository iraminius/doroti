import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRow, updateResult } from '../actions/index'

import './calculationRow.less'

class CalculationRow extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.updateRow({
            ...this.props,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input name="value1" type="number" value={this.props.value1} onChange={this.handleChange}/> 
                <input name="value2" type="number" value={this.props.value2} onChange={this.handleChange}/>
                <label>{this.props.result}</label>
            </div>
        )
    }
}

CalculationRow.propTypes = {
    index: PropTypes.number.isRequired,
    value1: PropTypes.number.isRequired,
    value2: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired,
    updateRow: PropTypes.func.isRequired,
    updateResult: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    value1: state.rows.rows[ownProps.index].value1,
    value2: state.rows.rows[ownProps.index].value2,
    result: state.rows.rows[ownProps.index].result
})

const mapDispatchToProps = dispatch => ({
    updateRow: rowData => {
        dispatch(updateRow(rowData))
    },
    updateResult: () => {
        dispatch(updateResult())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculationRow)