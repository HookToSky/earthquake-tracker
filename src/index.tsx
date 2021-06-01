import React from 'react';
import ReactDOM from 'react-dom';


import 'leaflet/dist/leaflet.css';
import './index.sass';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
