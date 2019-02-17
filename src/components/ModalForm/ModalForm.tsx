import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

interface IProps {
    common: any;
    actions: {
        modalForm: any,
    };
}

export class ModalForm extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    hideModal() {
        this.props.actions.modalForm.openModalForm({
            show: false,
            data: {

            },
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps: any) {
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    }

    shouldComponentUpdate(nextState: any, nextProps: any) {
        console.log('shouldComponentUpdate');
        return true;
    }

    createForm() {
        const formData = [];
        if (this.props.common.modalForm.data.form && this.props.common.modalForm.data.form.length > 0) {
            const arr = this.props.common.modalForm.data.form;
            if (arr.length > 0) {
                for (const [i, v] of arr.entries()) {
                    formData.push(
                        <div className="modal-form-row" key={i}>
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{v.label}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <input type="text" />
                                </Col>
                            </Row>
                        </div>,
                    );
                }
            }
        }
        return formData;
    }

    render() {
        return (
            <div className="modal">
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    show={this.props.common.modalForm.show}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.props.common.modalForm.data.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            {this.createForm()}
                        </Container>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={() => this.hideModal()}
                        >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}
