import * as React from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

interface IProps {
    actions: {
        trucks: any;
    };
}

export class Search extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);
    }

    onChangeInput(value: string) {
        this.props.actions.trucks.searchTrucks(value);
    }

    render() {
        return (
            <div className="search-truck">
                <input
                    placeholder={i18n.t('SEARCH_TRUCKS_PLACEHOLDER')}
                    onChange={(e) => this.onChangeInput(e.target.value)}
                />
            </div>
        );
    }

}
