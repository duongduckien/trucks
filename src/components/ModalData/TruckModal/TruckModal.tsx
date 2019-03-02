import * as React from 'react';
import { Modal, Container, Button, Row, Col } from 'react-bootstrap';
import './styles.scss';

// Components
import AutoComplete from '../AutoComplete';
import InputPrice from '../InputPrice';
import InputDimension from '../InputDimension';
import InputSelect from '../InputSelect';

// Languages
import i18n from '../../../utilities/i18n';

// Utilities
import { Helper } from '../../../utilities/helper';

const helper = new Helper();

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
}

export class TruckModal extends React.Component<IProps, IState> {

    state = {
        formData: {
            truckPlate: '',
            cargoType: [],
            price: 0,
            status: 0,
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
        console.log(formData);
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

    onChangeData(fieldName: string, value: any) {

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
                                    <span>{i18n.t('TRUCK_PLATE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <input type="text" onChange={(e) => this.onChangeData('truckPlate', e.target.value)} />
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('CARGO_TYPE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderCargoTypes()}
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('DRIVER')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderDrivers()}
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('TRUCK_TYPE')} </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <div className="number-with-unit">
                                        <input type="number" min="0" onChange={(e) => this.onChangeData('truckType', e.target.value)} />
                                        <span className="unit-text">{i18n.t('TON')}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('PRICE')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputPrice onPrice={(value) => this.onChangeData('price', value)} />
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('DIMENSION')} </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <InputDimension onDimension={(value) => this.onChangeData('dimension', value)} />
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('PARKING_ADDRESS')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <input type="text" />
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('PRODUCTION_YEAR')}</span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderProductionYear()}
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('STATUS')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    {this.renderStatus()}
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('DESCRIPTION')} <span className="modal-form-require">*</span>
                                    </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <textarea></textarea>
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