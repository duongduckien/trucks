import * as React from 'react';
import './styles.scss';

// Utilities
import { Helper } from '../../../utilities/helper';

const helper = new Helper();

interface IProps {
    onSelect: (value: any) => void;
}

interface IState {
    price: string;
}

export class InputSelect extends React.Component<IProps, {}> {

    state = {
        price: '',
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <select>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
        );
    }

}