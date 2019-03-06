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
        modal: any;
        trucks: any;
        drivers: any;
    };
    trucks: {
        listTrucks: any;
        cargoTypes: any;
        searchTrucks: string;
    };
}

interface IState {
    listTrucks: any;
}

export class ListTrucks extends React.Component<IProps, IState> {

    state = {
        listTrucks: [],
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.trucks.getTrucks();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        if (nextProps.trucks.searchTrucks !== '') {
            const newListTrucks = this.filterByTruckPlate(nextProps.trucks.listTrucks, nextProps.trucks.searchTrucks);
            this.setState({
                listTrucks: newListTrucks,
            });
        } else {
            this.setState({
                listTrucks: nextProps.trucks.listTrucks,
            });
        }

    }

    filterByTruckPlate(arr: any, str: string) {

        const filteredArray = [];

        if (arr.length > 0) {
            for (const item of arr) {
                if (item['truckPlate'].toString().toLowerCase().indexOf(str.toLowerCase()) >= 0) {
                    filteredArray.push(item);
                }
            }
        }

        return filteredArray;

    }

    addTruck() {
        this.props.actions.modal.openModal({
            show: true,
            data: {
                component: 'TruckModal',
                title: i18n.t('ADD_TRUCK'),
            },
        });
    }

    editTruck(id: any) {
        console.log(`Edit truck ${id}`);
    }

    deleteTruck(id: any) {
        console.log(`Delete truck ${id}`);
    }

    renderCargoType(data: any) {
        return (
            <span></span>
        );
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
                        {
                            this.state.listTrucks.map((truck: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{truck['truckPlate'] ? truck['truckPlate'] : ''}</td>
                                        <td>{truck['cargoTypeShow'] ? truck['cargoTypeShow'] : ''}</td>
                                        <td>{truck['driverShow'] ? truck['driverShow'] : ''}</td>
                                        <td>{truck['truckType'] ? truck['truckType'] : ''}</td>
                                        <td>{truck['priceShow'] ? truck['priceShow'] : ''}</td>
                                        <td>{truck['dimensionShow'] ? truck['dimensionShow'] : ''}</td>
                                        <td>{truck['parkingAddress'] ? truck['parkingAddress'] : ''}</td>
                                        <td>{truck['productionYear'] ? truck['productionYear'] : ''}</td>
                                        <td>{truck['statusShow'] ? truck['statusShow'] : ''}</td>
                                        <td>{truck['description'] ? truck['description'] : ''}</td>
                                        <td>
                                            <i
                                                onClick={() => this.editTruck(truck['id'])}
                                                className="fa fa-pencil-square-o"
                                                aria-hidden="true"
                                            ></i>
                                            <i
                                                onClick={() => this.deleteTruck(truck['id'])}
                                                className="fa fa-trash-o"
                                                aria-hidden="true"
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>

                <Paginator />
            </div>
        );
    }

}
