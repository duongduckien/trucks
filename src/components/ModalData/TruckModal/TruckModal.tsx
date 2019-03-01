import * as React from 'react';
import { Modal, Container, Button, Row, Col } from 'react-bootstrap';
import './styles.scss';

// Components
import AutoComplete from '../AutoComplete';

// Languages
import i18n from '../../../utilities/i18n';

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

export class TruckModal extends React.Component<IProps, {}> {

    state = {
        formData: {},
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
        console.log(this.state.formData);
    }

    renderStatus() {

        const status = this.props.trucks.truckStatus;

        if (status.length > 0) {
            return (
                <select>
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

    onChangeData(fieldName: string, value: any) {

        switch (fieldName) {
            case 'truckPlate': {
                const formData = { ...this.state.formData, ...{ truckPlate: value }};
                this.setState({ formData });
                break;
            }
            case 'cargoType': {
                const formData = { ...this.state.formData, ...{ cargoType: value }};
                this.setState({ formData });
                break;
            }
            case 'driver': {
                const formData = { ...this.state.formData, ...{ driver: value }};
                this.setState({ formData });
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
                                    <input type="text" />
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
                                    <input type="text" />
                                </Col>
                            </Row>
                        </div>

                        <div className="modal-form-row">
                            <Row className="show-grid">
                                <Col xs={12} md={4}>
                                    <span>{i18n.t('DIMENSION')} </span>
                                </Col>
                                <Col xs={12} md={8}>
                                    <input type="text" />
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
                                    <input type="text" />
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