import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';

export class Main extends Component<{}> {

    render() {
        return (
            <div className='container'>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </Router>
            </div>
        )
    }

}
