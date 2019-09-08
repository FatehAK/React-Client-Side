import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

//create Redux store with initial state
const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);

serviceWorker.unregister();
