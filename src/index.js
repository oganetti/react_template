import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './Helpers';
import 'semantic-ui-css/semantic.min.css';



serviceWorker.unregister();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
