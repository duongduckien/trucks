import * as React from 'react';
import './App.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';

class App extends React.Component<{}> {

    render() {
        return (
            <div className='container'>
                <Header />

                <div className="container-fluid">
                    <Router />
                </div>
                
                <Footer />
            </div>
        );
    }

}

export default App;