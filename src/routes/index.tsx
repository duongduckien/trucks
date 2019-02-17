import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/Home';
import Login from '../containers/Login';
import ListTrucks from '../components/ListTrucks';

class Router extends React.Component<{}> {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/list-trucks" exact component={ListTrucks} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </main>
        );
    }

}

export default Router;
