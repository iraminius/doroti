import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore, history } from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'
import Calculator from './containers/Calculator'

import './index.less'

const store = configureStore()

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Calculator} />
                        </Switch>
                    </ConnectedRouter>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)