import React from "react"
import ReactDOM from "react-dom"

import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.less"

import Calculator from "./components/Calculator"

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = "Doroti Kalkulator"

        let favicon = document.createElement("link")
        favicon.rel = "icon"
        favicon.type = "image/x-icon"
        favicon.href = require("./res/images/favicon.ico")
        document.head.appendChild(favicon)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10 content">
                        <Calculator/>
                    </div>
                    <div className="col-sm-1"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)