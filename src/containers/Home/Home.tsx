import * as React from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

// Components
import ListTrucks from '../../components/ListTrucks';
import Search from '../../components/Search';
import Paginator from '../../components/Paginator';

export class Home extends React.Component<{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Search />
                <ListTrucks />
                <Paginator />
            </div>
        );
    }

}
