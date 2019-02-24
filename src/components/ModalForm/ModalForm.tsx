import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

// Language
import i18n from '../../utilities/i18n';

// Utilities
import { Helper } from '../../utilities/helper';

// Components
import AutoComplete from '../AutoComplete';

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
        this.setState({ formData: [] });
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
                return (<input type="text" onChange={(e) => this.handleFormData(v.alias, e.target.value, 'text')} />);
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
            case 'autoCompleteChips': {
                const listData = (v.data && Array.isArray(v.data)) ? v.data : [];
                return (
                    <AutoComplete
                        list={listData}
                        chips={true}
                        onSelectType={(item) => (Array.isArray(v.data)
                            ? this.handleFormData(v.alias, item, 'autoCompleteChips') :
                            (item.id
                                ? this.handleFormData(v.alias, item.id, 'autoCompleteChips')
                                : this.handleFormData(v.alias, '', 'autoCompleteChips')))}
                    />
                );
            }
            case 'autoComplete': {
                const listData = (v.data && Array.isArray(v.data)) ? v.data : [];
                return (
                    <AutoComplete
                        list={listData}
                        chips={false}
                        onSelectType={(item) => (Array.isArray(v.data)
                            ? this.handleFormData(v.alias, item, 'autoComplete') :
                            (item.id
                                ? this.handleFormData(v.alias, item.id, 'autoComplete')
                                : this.handleFormData(v.alias, '', 'autoComplete')))}
                    />
                );
            }
            case 'textarea': {
                return (
                    <textarea onChange={(e) => this.handleChange(e, v.alias)}></textarea>
                );
            }
            case 'numberWithUnit': {
                return (
                    <div className="number-with-unit">
                        <input type="number" min="0" onChange={(e) => this.handleFormData(v.alias, e.target.value, 'numberWithUnit')} />
                        <span className="unit-text">{v.showType ? v.showType.unit : ''}</span>
                    </div>
                );
            }
            case 'numberCurrencyFormat': {
                return (
                    <div className="number-currency">
                        <input 
                            type="number"
                            min="0"
                            onChange={(e) => this.handleFormData(v.alias, e.target.value, 'numberCurrencyFormat')} 
                        />
                    </div>
                );
            }
            default: {
                break;
            }
        }
    }

    /**
     * Function handle form data
     * @param  {any} key
     * @param  {any} value
     */
    handleFormData(key: any, value: any, type: string) {
        if (this.state.formData.length > 0) {
            for (const [index, item] of this.state.formData.entries()) {
                if (item.alias === key) {
                    switch (type) {
                        case 'autoCompleteChips': {
                            this.state.formData[index]['value'] = value;
                            break;
                        }
                        case 'text': {
                            this.state.formData[index]['value'] = value;
                            break;
                        }
                        case 'autoComplete': {
                            this.state.formData[index]['value'] = value.id;
                            break;
                        }
                        case 'numberWithUnit': {
                            this.state.formData[index]['value'] = value;
                            break;
                        }
                        case 'numberCurrencyFormat': {
                            this.state.formData[index]['value'] = value;
                            break;
                        }
                    }
                }
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
