import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

interface IProps {
    common: any;
}

export class ModalForm extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="modal">
                <Modal 
                    {...this.props} 
                    aria-labelledby="contained-modal-title-vcenter" 
                    show={this.props.common.modalForm.show}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Using Grid in Modal
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row className="show-grid">
                                <Col xs={12} md={8}>
                                    <code>.col-xs-12 .col-md-8</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                            </Row>

                            <Row className="show-grid">
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                                <Col xs={6} md={4}>
                                    <code>.col-xs-6 .col-md-4</code>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}
