import React from "react"

import "./row.less"

export default class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: 0,
            value2: 0,
            result: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        const prevResult = this.state.result

        this.setState({[name]: value}, () => {
            const newResult = this.state.value1 * this.state.value2
            this.setState({result: newResult})

            const change = newResult - prevResult
            this.props.changeResult(change)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <table className="row-inputs-table">
                        <tbody>
                            <tr>
                                <td><input name="value1" type="number" value={this.state.value1} onChange={this.handleChange} /></td>
                                <td>x</td>
                                <td><input name="value2" type="number" value={this.state.value2} onChange={this.handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-12 col-lg-6">
                    <table className="row-results-table">
                        <tbody>
                            <tr>
                                <td>{this.state.result}</td>
                                <td>{this.state.result / 100}</td>
                                <td>{this.state.result / 100 / 10000}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}