import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

// Language
import i18n from '../../utilities/i18n';

// Utilities
import { Helper } from '../../utilities/helper';

interface IProps {
    common: any;
    actions: {
        modalForm: any,
    };
}

interface IState {
    formData: any;
}

const helper = new Helper();

export class ModalForm extends React.Component<IProps, IState> {

    state = {
        formData: [],
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.common.modalForm.data.form && nextProps.common.modalForm.data.form.length > 0) {
            const arr = nextProps.common.modalForm.data.form;
            for (const v of arr) {
                const stateData = this.state.formData;
                stateData.push({
                    alias: v.alias,
                    value: v.value,
                });
                this.setState({
                    formData: stateData,
                });
            }
        }
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        if (this.props.common.modalForm.show === nextProps.common.modalForm.show) {
            return false;
        }
        return true;
    }

    hideModal() {
        this.props.actions.modalForm.openModalForm({
            show: false,
            data: {},
        });
    }

    storeData() {
       console.log(this.state.formData);
    }

    handleChange(e: any, alias: string) {
        console.log(e.target.value);
        console.log(alias);
    }

    createInput(v: any) {
        switch (v.type) {
            case 'text': {
                return (<input type="text" onChange={(e) => this.handleChange(e, v.alias)} />);
            }
            case 'select': {

                switch (v.value) {
                    case 'year': {
                        return (
                            <select onChange={(e) => this.handleChange(e, v.alias)}>
                                {
                                    helper.listYears().map((year: any, index: number) => {
                                        if (year === 'None') {
                                            if (!v.require) return <option value={year} key={index}>{year}</option>;
                                        } else {
                                            return <option value={year} key={index}>{year}</option>;
                                        }
                                    })
                                }
                            </select>
                        );
                    }
                    case 'status': {
                        return (
                            <select onChange={(e) => this.handleChange(e, v.alias)}>
                                {
                                    helper.listStatus().map((status: string, index: number) => {
                                        if (status === 'None') {
                                            if (!v.require) return <option value={status} key={index}>{status}</option>;
                                        } else {
                                            return <option value={status} key={index}>{status}</option>;
                                        }
                                    })
                                }
                            </select>
                        );
                    }
                    default: {
                        break;
                    }
                }
                break;

            }
            case 'textarea': {
                return (
                    <textarea onChange={(e) => this.handleChange(e, v.alias)}></textarea>
                );
            }
            default: {
                break;
            }
        }
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
                                    <span>{v.label} <span className="modal-form-require">{v.require ? '*' : ''}</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.createInput(v)}
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
                    onHide={() => this.hideModal()}
                >
                    <Modal.Header closeButton>
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
                            variant="success"
                            onClick={() => this.storeData()}
                        >{i18n.t('SAVE')}</Button>
                        <Button
                            onClick={() => this.hideModal()}
                        >{i18n.t('CLOSE')}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}
