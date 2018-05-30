import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {renderRouter} from '../routes';

require('offline-plugin/runtime').install();

const routes = renderRouter(window.__INITIALSTATE__);

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        <Router routes={routes} history={browserHistory}/>,
        document.getElementById('app')
    );
}