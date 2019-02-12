import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/Home';
import Login from '../containers/Login';

class Router extends React.Component<{}> {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Router;
