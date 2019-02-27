import * as React from 'react';
import { Modal, Container, Button } from 'react-bootstrap';

// Languages
import i18n from '../../../utilities/i18n';

interface IProps {
    common: any;
    actions: {
        modal: any,
    };
}

export class TruckModal extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    hideModal() {
        this.props.actions.modal.hideModal({
            show: false,
            data: {},
        });
    }

    storeData() {
        console.log('store data');
    }

    render() {
        return (
            <div className="truck-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        AAAAAAAA
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        AAAAAA
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