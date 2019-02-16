import * as React from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

export class Home extends React.Component<{}> {

    constructor(props: any) {
        super(props);
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
            </div>
        );
    }

}
