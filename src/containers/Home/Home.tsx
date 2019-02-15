import * as React from 'react';
import { Table } from 'react-bootstrap';
import './styles.scss';

export class Home extends React.Component<{}> {

    render() {
        return (
            <div className="list-trucks">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Truck plate</th>
                            <th>Cargo type</th>
                            <th>Driver</th>
                            <th>Truck type</th>
                            <th>Price</th>
                            <th>Dimension (L-W-H)</th>
                            <th>Parking Address</th>
                            <th>Production year</th>
                            <th>Status</th>
                            <th>Description</th>
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
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
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
