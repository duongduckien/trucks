import * as React from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import Search from '../../components/Search';
import Paginator from '../../components/Paginator';

// Interfaces
import { IModalFormData } from '../../interfaces/Modal';

interface IProps {
    actions: {
        modalForm: any,
        trucks: any,
    };
    trucks: {
        truckTypes: any,
    };
}

export class ListTrucks extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.trucks.getTruckTypes();
    }

    addTruck() {

        console.log(this.props.trucks.truckTypes);

        const truckTypes = this.props.trucks.truckTypes;

        const formData: IModalFormData[] = [
            {label: i18n.t('TRUCK_PLATE'), alias: 'truckPlate', type: 'text', value: '', require: true},
            {label: i18n.t('CARGO_TYPE'), alias: 'cargoType', type: 'autoCompleteChips', value: '', require: true, data: truckTypes},
            {label: i18n.t('DRIVER'), alias: 'driver', type: 'text', value: '', require: true},
            {label: i18n.t('TRUCK_TYPE'), alias: 'truckType', type: 'text', value: '', require: false},
            {label: i18n.t('PRICE'), alias: 'price', type: 'text', value: '', require: true},
            {label: i18n.t('DIMENSION'), alias: 'dimension', type: 'text', value: '', require: false},
            {label: i18n.t('PARKING_ADDRESS'), alias: 'parkingAddress', type: 'text', value: '', require: true},
            {label: i18n.t('PRODUCTION_YEAR'), alias: 'productionYear', type: 'select', value: 'year', require: false},
            {label: i18n.t('STATUS'), alias: 'status', type: 'select', value: 'status', require: true},
            {label: i18n.t('DESCRIPTION'), alias: 'description', type: 'textarea', value: '', require: true},
        ];

        this.props.actions.modalForm.openModalForm({
            show: true,
            data: {
                title: i18n.t('ADD_TRUCK'),
                form: formData,
            },
        });

    }

    editTruck() {
        console.log('Edit truck');
    }

    deleteTruck() {
        console.log('Delete truck');
    }

    render() {
        return (
            <div className="list-trucks">
                <Search />

                <div className="btn-add-truck">
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => this.addTruck()}
                    >{i18n.t('ADD_TRUCK')}</button>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>{i18n.t('TRUCK_PLATE')}</th>
                            <th>{i18n.t('CARGO_TYPE')}</th>
                            <th>{i18n.t('DRIVER')}</th>
                            <th>{i18n.t('TRUCK_TYPE')}</th>
                            <th>{i18n.t('PRICE')}</th>
                            <th>{i18n.t('DIMENSION')}</th>
                            <th>{i18n.t('PARKING_ADDRESS')}</th>
                            <th>{i18n.t('PRODUCTION_YEAR')}</th>
                            <th>{i18n.t('STATUS')}</th>
                            <th>{i18n.t('DESCRIPTION')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>
                                <i 
                                    onClick={() => this.editTruck()} 
                                    className="fa fa-pencil-square-o" 
                                    aria-hidden="true"
                                ></i>
                                <i
                                    onClick={() => this.deleteTruck()} 
                                    className="fa fa-trash-o" 
                                    aria-hidden="true"
                                ></i>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>1</td>
                            <td>Mark</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

                <Paginator />
            </div>
        );
    }

}
