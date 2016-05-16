import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {IndexRoute} from 'react-router'

import App from './components/App/App';
import StatsPage from './components/StatsPage/StatsPage';



render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/stats"    component={StatsPage}/>
            <Route path="/about"    component={StatsPage}/>
            <Route path="/contact"  component={StatsPage}/>
        </Route>
    </Router>
), document.getElementById('wrapper'));