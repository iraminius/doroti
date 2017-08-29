import React from "react"

import "./finalResults.less"

export default class FinalResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-0 col-lg-6"/>
                <div className="col-md-12 col-lg-6">
                    <table className="final-results-table">
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
                    </table>
                </div>
            </div>
        )
    }
}