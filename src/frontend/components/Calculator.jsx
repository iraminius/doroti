import React from "react"
import Row from "./Row"

import "./calculator.less"

import FinalResults from "./FinalResults"

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calculationFields: [],
            result: 0
        }

        this.changeResult = this.changeResult.bind(this)
        this.addEmptyCalculationObject = this.addEmptyCalculationObject.bind(this)
    }

    componentDidMount() {
        document.title = "Doroti | Kalkulator"
        this.addEmptyCalculationObject()
    }

    changeResult(change) {
        const newResult = this.state.result + change
        this.setState({result: newResult})
    }

    addEmptyCalculationObject() {
        let fields = this.state.calculationFields
        fields.push((<Row key={this.state.calculationFields.length} index={this.state.calculationFields.length} changeResult={(change) => this.changeResult(change)}/>))
        
        this.setState((prevState, props) => ({
            calculationFields: fields
        }))
    }

    render() {
        return (
            <div className="container-fluid calculator">
                <div className="row">
                    <div className="col-md-0 col-lg-1"/>
                    <div className="col-md-12 col-lg-10">
                        <div className="calculation-rows">
                            {this.state.calculationFields}
                        </div>

                        <button className="calculator-add-button" onClick={this.addEmptyCalculationObject}>
                            +
                        </button>

                        <FinalResults result={this.state.result} />
                    </div>
                    <div className="col-md-0 col-lg-1"/>
                </div>
            </div>
        )
    }
}