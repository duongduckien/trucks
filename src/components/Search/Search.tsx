import * as React from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../../utilities/i18n';
import './styles.scss';

export class Search extends React.Component<{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="search-truck">
                <input
                    placeholder={i18n.t('SEARCH_TRUCKS_PLACEHOLDER')}
                />
            </div>
        );
    }

}
