import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';

import App from './layout/App/App';

// import './assets/css/main.css';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
    routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <Route
                path="/"
                component={App}
            />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
