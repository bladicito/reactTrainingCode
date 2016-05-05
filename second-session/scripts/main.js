import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {IndexRoute} from 'react-router'

import App from './components/App/App';
import EntryTable from './components/EntryTable/EntryTable';



render((
    <Router history={hashHistory}>
        <Route path="/"                 component={App} />
        <Route path="/clubs"            component={EntryTable} />
        <Route path="/national-team"    component={App}/>
        <Route path="/about"            component={App}/>
        <Route path="/contact"          component={App}/>

    </Router>
), document.getElementById('wrapper'));