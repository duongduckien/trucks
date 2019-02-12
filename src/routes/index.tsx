import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/Home';
import Login from '../containers/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Main extends Component<{}> {

    render() {
        return (
            <div className='container'>
                <Header />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }

}
