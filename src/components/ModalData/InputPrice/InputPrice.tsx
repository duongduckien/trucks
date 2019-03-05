import * as React from 'react';
import './styles.scss';

// Utilities
import { Helper } from '../../../utilities/helper';

const helper = new Helper();

interface IProps {
    onPrice: (value: any) => void;
}

interface IState {
    price: string;
}

export class InputPrice extends React.Component<IProps, {}> {

    state = {
        price: '',
    };

    constructor(props: any) {
        super(props);
    }

    onChangePrice(value: any) {

        const reg = /^[1-9][0-9,]*$/;

        if (reg.test(value) || value === '') {
            const data = helper.addSymbol(value, ',');
            this.setState({ price: data });
            this.props.onPrice(parseInt(helper.replaceChar(data), 10));
        }

    }

    render() {
        return (
            <input type="text" value={this.state.price} onChange={(e) => this.onChangePrice(e.target.value.trim())} />
        );
    }

}