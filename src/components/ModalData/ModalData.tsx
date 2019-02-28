import * as React from 'react';
import { Modal } from 'react-bootstrap';

// Components
import TruckModal from './TruckModal';

interface IProps {
    common: any;
    actions: {
        modal: any,
    };
}

export class ModalData extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        if (this.props.common.modal.show === nextProps.common.modal.show) {
            return false;
        }
        return true;
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

    getContent() {
        
        const tagName = this.props.common.modal.data.component;

        switch (tagName) {
            case 'TruckModal': {
                return (
                    <TruckModal />
                );
            }
            default: {
                break;
            }
        }

    }

    render() {
        return (
            <div className="modal">
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    show={this.props.common.modal.show}
                    onHide={() => this.hideModal()}
                >
                    {this.getContent()}
                </Modal>
            </div>
        );
    }

}