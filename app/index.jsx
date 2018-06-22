require('./index.scss');
require('./js/Vendor');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/react/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
