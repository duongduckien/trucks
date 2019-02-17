import * as React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ModalForm from './components/ModalForm';
import Router from './routes';

class App extends React.Component<{}> {

    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid pl-0">
                    <div className="row">
                        <Col md={2}>
                            <NavBar />
                        </Col>

                        <Col md={10}>
                            <Router />
                        </Col>
                    </div>
                </div>

                <ModalForm />

                <Footer />
            </div>
        );
    }

}

export default App;