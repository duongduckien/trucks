import * as React from 'react';
import './styles.scss';

export class NavBar extends React.Component<{}> {

    render() {
        return (
            <div className="navbar">
                <nav>
                    <div>
                        <a href="#" className="nav-link">List Trucks</a>
                    </div>
                </nav>
            </div>
        );
    }

}
