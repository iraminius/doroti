import React from "react"
import { Row, Col, Form, FormGroup, InputGroup, FormControl, Button, Glyphicon } from "react-bootstrap"

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
        this.changeUnit = this.changeUnit.bind(this)
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

    changeUnit(eventKey, event) {
        console.log(eventKey)
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Form inline>
                        <Col componentClass={FormGroup} xs={5} sm={5} md={3}>
                            <InputGroup bsClass="calculation-input input-group">
                                <FormControl type="number" name="value1" value={this.state.value1} onChange={this.handleChange}/>
                            </InputGroup>
                        </Col>

                        <Col bsClass="icon col" xs={2} sm={2} md={1}>
                            <Glyphicon glyph="remove"/>
                        </Col>

                        <Col componentClass={FormGroup} xs={5} sm={5} md={3}>
                            <InputGroup bsClass="calculation-input input-group">
                                <FormControl type="number" name="value2" value={this.state.value2} onChange={this.handleChange}/>
                            </InputGroup>
                        </Col>

                        <Col bsClass="icon col" xsHidden smHidden md={1}>
                            <Glyphicon glyph="random"/>
                        </Col>

                        <Col componentClass={FormGroup} xsHidden smHidden md={4}>
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