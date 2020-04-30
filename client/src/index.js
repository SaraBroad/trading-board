import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// change App to .jsx?
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore, { history } from './store/index'
import { ConnectedRouter } from 'connected-react-router';
// store --> components --> actions --> reducers --> store

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
