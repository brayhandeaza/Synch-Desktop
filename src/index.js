import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './css/Responsive.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as  Router } from 'react-router-dom';

// Redux
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducers from './redux/reducers/Stocks'
const store = createStore(reducers)


ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
