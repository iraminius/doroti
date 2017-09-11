import React from "react"
import { Row, Col, Form, FormGroup, InputGroup, FormControl, Glyphicon } from "react-bootstrap"

import "./calculationRow.less"

export default class CalculationRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value1: 0,
            value2: 0,
            result: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.selectText = this.selectText.bind(this)
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

    selectText(event) {
        event.target.select()
    }

    render() {
        return (
            <Row>
                <Col bsClass="calculation-row col" xs={12}>
                    <Form inline>
                        <Col bsClass="number-icon col" xs={1} sm={1} lg={1}>
                            {this.props.index}
                        </Col>

                        <Col componentClass={FormGroup} xs={5} sm={5} lg={3}>
                            <InputGroup bsClass="calculation-input input-group">
                                <FormControl bsClass="calculation-form-input form-control" type="number" name="value1" value={this.state.value1} onFocus={this.selectText} onChange={this.handleChange}/>
                            </InputGroup>
                        </Col>

                        <Col bsClass="icon col" xs={1} sm={1} lg={1}>
                            <Glyphicon glyph="remove"/>
                        </Col>

                        <Col componentClass={FormGroup} xs={5} sm={5} lg={3}>
                            <InputGroup bsClass="calculation-input input-group">
                                <FormControl bsClass="calculation-form-input form-control" type="number" name="value2" value={this.state.value2} onFocus={this.selectText} onChange={this.handleChange}/>
                            </InputGroup>
                        </Col>

                        <Col bsClass="icon col" xsHidden smHidden mdHidden lg={1}>
                            <Glyphicon glyph="random"/>
                        </Col>

                        <Col componentClass={FormGroup} xsHidden smHidden mdHidden lg={3}>
                            <InputGroup>
                                <FormControl name="value1" value={this.state.result} />
                                <InputGroup.Addon>mm<sup>2</sup></InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </Form>
                </Col>
            </Row>
        )
    }
}