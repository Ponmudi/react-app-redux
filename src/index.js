import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import Reducer from './redux/Reducer'

// const logAction = store => {
//     return next => {
//         return action => {
//             const result = next(action)
//                 console.log(`Caught in the middleware ${JSON.stringify(result)}`)
//             return result;
//         }
//     }
// }
const store = createStore(Reducer);

//const store = createStore(Reducer, applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

