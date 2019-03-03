import * as React from 'react';
import { Modal, Container, Button, Row, Col } from 'react-bootstrap';
import './styles.scss';

// Components
import AutoComplete from '../AutoComplete';
import InputPrice from '../InputPrice';
import InputDimension from '../InputDimension';
import InputTextArea from '../InputTextArea';

// Languages
import i18n from '../../../utilities/i18n';

// Utilities
import { Helper } from '../../../utilities/helper';
import { Validation } from '../../../utilities/validation';

const helper = new Helper();
const validation = new Validation();

interface IProps {
    common: any;
    trucks: any;
    drivers: any;
    actions: {
        modal: any;
        truck: any;
        driver: any;
    };
}

interface IState {
    formData: {
        truckPlate: string;
        cargoType: number[];
        driver?: number;
        truckType?: number;
        price: number;
        dimension?: {
            l: number;
            w: number;
            h: number;
        };
        parkingAddress?: string;
        productionYear?: number;
        status: number;
        description?: string;
    };
    errorMessage: {
        truckPlate: string;
        cargoType: string;
        driver: string;
        truckType: string;
        price: string;
        dimension: string;
        parkingAddress: string;
        productionYear: string;
        status: string;
        description: string;
    };
}

export class TruckModal extends React.Component<IProps, IState> {

    state = {
        formData: {
            truckPlate: '',
            cargoType: [],
            price: 0,
            status: 0,
        },
        errorMessage: {
            truckPlate: '',
            cargoType: '',
            driver: '',
            truckType: '',
            price: '',
            dimension: '',
            parkingAddress: '',
            productionYear: '',
            status: '',
            description: '',
        },
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.truck.getTruckStatus();
        this.props.actions.truck.getCargoTypes();
        this.props.actions.driver.getDrivers();
    }

    hideModal() {
        this.props.actions.modal.hideModal({
            show: false,
            data: {
                component: '',
                title: '',
            },
        });
    }

    storeData() {

        const formData = this.setDefautStatus(this.state.formData);
        const rules = validation.truckRules;
        const errMsg = validation.validate(rules, formData);
        const errorMessage = this.state.errorMessage;

        if (Object.keys(errMsg).length > 0) {
            if (Object.keys(errorMessage).length > 0) {
                for (const key in errorMessage) {
                    if (Object.keys(errMsg).length > 0 && errMsg[key] && errMsg[key] !== '') {
                        errorMessage[key] = errMsg[key];
                    }
                }
                this.setState({ errorMessage });
            }
        } else {
            console.log(formData);
            this.props.actions.truck.createTruck(formData);
        }

    }

    setDefautStatus(formData: any) {
        const status = this.props.trucks.truckStatus;
        if (status.length > 0 && formData['status'] === 0) {
            formData['status'] = status[0]['id'];
            return formData;
        }
        return formData;
    }

    renderStatus() {

        const status = this.props.trucks.truckStatus;

        if (status.length > 0) {
            return (
                <select onChange={(e) => this.onChangeData('status', e.target.value)}>
                    {
                        status.map((item: any, index: any) => {
                            return <option value={item.id} key={index}>{item.name}</option>;
                        })
                    }
                </select>
            );
        }

        return (
            <select>
                <option value="">{i18n.t('NONE')}</option>
            </select>
        );

    }

    renderCargoTypes() {
        const cargoTypes = this.props.trucks.cargoTypes;
        return (
            <AutoComplete
                list={cargoTypes}
                chips={true}
                onSelectType={(item) => this.onChangeData('cargoType', item)}
            />
        );
    }

    renderDrivers() {
        const drivers = this.props.drivers.listDrivers;
        return (
            <AutoComplete
                list={drivers}
                chips={false}
                onSelectType={(item) => this.onChangeData('driver', item.id)}
            />
        );
    }

    renderProductionYear() {
        return (
            <select onChange={(e) => this.onChangeData('productionYear', parseInt(e.target.value, 10))}>
                {
                    helper.listYears().map((year: any, index: number) => {
                        if (year === 'None') {
                            return <option value="" key={index}>{i18n.t('NONE')}</option>;
                        } else {
                            return <option value={year} key={index}>{year}</option>;
                        }
                    })
                }
            </select>
        );
    }

    clearErrorMsg(fieldName: string) {
        const errorMessage = this.state.errorMessage;
        errorMessage[fieldName] = '';
        this.setState({ errorMessage });
    }

    onChangeData(fieldName: string, value: any) {

        this.clearErrorMsg(fieldName);

        switch (fieldName) {
            case 'truckPlate': {
                const formData = { ...this.state.formData, ...{ truckPlate: value } };
                this.setState({ formData });
                break;
            }
            case 'cargoType': {
                const formData = { ...this.state.formData, ...{ cargoType: value } };
                this.setState({ formData });
                break;
            }
            case 'driver': {
                const formData = { ...this.state.formData, ...{ driver: value } };
                this.setState({ formData });
                break;
            }
            case 'truckType': {
                if (helper.isNumber(value)) {
                    const formData = { ...this.state.formData, ...{ truckType: parseInt(value, 10) } };
                    this.setState({ formData });
                }
                break;
            }
            case 'price': {
                const formData = { ...this.state.formData, ...{ price: value } };
                this.setState({ formData });
                break;
            }
            case 'dimension': {
                const formData = { ...this.state.formData, ...{ dimension: value } };
                this.setState({ formData });
                break;
            }
            case 'parkingAddress': {
                const formData = { ...this.state.formData, ...{ parkingAddress: value } };
                this.setState({ formData });
                break;
            }
            case 'productionYear': {
                if (helper.isNumber(value)) {
                    const formData = { ...this.state.formData, ...{ productionYear: value } };
                    this.setState({ formData });
                } else {
                    const formData = this.state.formData;
                    if (formData['productionYear']) {
                        delete formData['productionYear'];
                        this.setState({ formData });
                    }
                }
                break;
            }
            case 'status': {
                if (helper.isNumber(value)) {
                    const formData = { ...this.state.formData, ...{ status: parseInt(value, 10) } };
                    this.setState({ formData });
                }
                break;
            }
            case 'description': {
                const formData = { ...this.state.formData, ...{ description: value } };
                this.setState({ formData });
            }
            default: {
                break;
            }
        }

    }

    render() {
        return (
            <div className="truck-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.common.modal.data.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('TRUCK_PLATE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <input type="text" onChange={(e) => this.onChangeData('truckPlate', e.target.value)} />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.truckPlate}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('CARGO_TYPE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderCargoTypes()}
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.cargoType}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('DRIVER')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderDrivers()}
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.driver}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('TRUCK_TYPE')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <div className="number-with-unit">
                                        <input type="number" min="0" onChange={(e) => this.onChangeData('truckType', e.target.value)} />
                                        <span className="unit-text">{i18n.t('TON')}</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.truckType}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('PRICE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputPrice onPrice={(value) => this.onChangeData('price', value)} />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.price}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('DIMENSION')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputDimension onDimension={(value) => this.onChangeData('dimension', value)} />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.dimension}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('PARKING_ADDRESS')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputTextArea 
                                        onTextArea={(value) => this.onChangeData('parkingAddress', value)}
                                        maxLength={500}
                                    />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.parkingAddress}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('PRODUCTION_YEAR')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderProductionYear()}
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.productionYear}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('STATUS')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderStatus()}
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.status}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span className="label">{i18n.t('DESCRIPTION')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputTextArea 
                                        onTextArea={(value) => this.onChangeData('description', value)}
                                        maxLength={200}
                                    />
                                </Col>
                            </Row>
                            <Row className="show-grid">
                                <Col xs={12} md={{ span: 8, offset: 4 }}>
                                    <div className="msg-error">
                                        <span>{this.state.errorMessage.description}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
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
            </div>
        );
    }

}