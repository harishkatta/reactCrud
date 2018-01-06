import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './src/components/toDoApp';
//import App from './srcpractice/App.js';
import reducers from './srcpractice/redux/combineReducer';
let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
