import React from "react"
import { Row, Col, Table } from "react-bootstrap"

import "./finalResults.less"

export default class FinalResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
                                <td>{this.props.result}</td>
                                <td>{this.props.result / 100}</td>
                                <td>{this.props.result / 100 / 10000}</td>
                            </tr>
                        </tbody>
                    </Table>
        )
    }
}