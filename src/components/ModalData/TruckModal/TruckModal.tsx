import * as React from 'react';
import { Modal, Container, Button, Row, Col } from 'react-bootstrap';
import './styles.scss';

// Languages
import i18n from '../../../utilities/i18n';

interface IProps {
    common: any;
    trucks: any;
    actions: {
        modal: any,
        truck: any,
    };
}

export class TruckModal extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.truck.getTruckStatus();
        this.props.actions.truck.getCargoTypes();
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
        console.log('store data');
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

        if (cargoTypes.length > 0) {

            return (
                <select>
                    {
                        cargoTypes.map((item: any, index: any) => {
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
                                    <input type="text" />
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
                                    <input type="text" />
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