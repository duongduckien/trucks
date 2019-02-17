import * as React from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../utilities/i18n';
import './styles.scss';

export class NavBar extends React.Component<{}> {

    render() {
        return (
            <div className="navbar">
                <nav>
                    <div>
                        <Link to="/list-trucks">{i18n.t('LIST_TRUCKS')}</Link>
                    </div>
                </nav>
            </div>
        );
    }

}
