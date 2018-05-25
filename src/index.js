import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'semantic-ui-css/semantic.min.css';

import initialState from 'initialState';
import configureStore from 'configureStore';
import registerServiceWorker from 'registerServiceWorker';
import { Root } from 'features/Root';


const history = createHistory();
const store = configureStore(initialState, history);

const render = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <Root />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render();
registerServiceWorker();
