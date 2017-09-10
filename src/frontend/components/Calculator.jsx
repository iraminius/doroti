import React from "react"
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Glyphicon, Table } from "react-bootstrap"

import CalculationRow from "./CalculationRow"
import FinalResults from "./FinalResults"

import "./calculator.less"

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calculationFields: [],
            result: 0
        }

        this.changeResult = this.changeResult.bind(this)
        this.addEmptyCalculationRows = this.addEmptyCalculationRows.bind(this)
    }

    componentDidMount() {
        document.title = "Doroti Kalkulator"
        let favicon = document.createElement("link")
        favicon.rel = "icon"
        favicon.type = "image/x-icon"
        favicon.href = require("../res/images/favicon.ico")
        document.head.appendChild(favicon)

        this.addEmptyCalculationRows(20)
    }

    changeResult(change) {
        const newResult = this.state.result + change
        this.setState({result: newResult})
    }

    addEmptyCalculationRows(value) {
        let fields = this.state.calculationFields

        for(;value > 0; value--) {
            fields.push((<CalculationRow key={this.state.calculationFields.length} index={this.state.calculationFields.length} changeResult={(change) => this.changeResult(change)}/>))
        }

        this.setState((prevState, props) => ({
            calculationFields: fields
        }))
    }

    render() {
        return (
            <Grid bsClass="container-fluid calculator">
                <Row>
                    <Col sm={0} mdOffset={1} md={1}>
                        <form>
                            <FormGroup bsClass="form-group units" controlId="formControlsSelect">
                                <FormControl componentClass="select">
                                    <option value="mm">mm</option>
                                    <option value="cm">cm</option>
                                    <option value="cm">m</option>
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Col>

                    <Col sm={12} md={4}>
                        <Row>
                            <Col sm={12}>
                                {this.state.calculationFields}
                            </Col>
                        </Row>

                        <ButtonToolbar bsClass="btn-toolbar calculator-buttons">
                            <Button onClick={() => this.addEmptyCalculationRows(1)}>
                                <Glyphicon glyph="plus" /> 1
                            </Button>

                            <Button onClick={() => this.addEmptyCalculationRows(10)}>
                                <Glyphicon glyph="plus" /> 10
                            </Button>
                        </ButtonToolbar>
                    </Col>

                        <Table bsClass="final-results-table">
                            <thead>
                                <tr className="final-results-headers">
                                    <th>Milimetry</th>
                                    <th>Centymetry</th>
                                    <th>Metry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="final-results-content">
                                    <td>{this.state.result}</td>
                                    <td>{this.state.result / 100}</td>
                                    <td>{this.state.result / 100 / 10000}</td>
                                </tr>
                            </tbody>
                        </Table>
                </Row>
            </Grid>
        )
    }
}