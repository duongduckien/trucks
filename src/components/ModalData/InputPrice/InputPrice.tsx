import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
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
            const data = this.addSymbol(value, ',');
            this.setState({ price: data });
            this.props.onPrice(data);
        }

    }

    addSymbol(data: string, symbol: string) {

        const newData = data.replace(/,/g, '');
        const length = newData.length;

        if (length > 3) {

            const result = Math.floor(length / 3);
            const balance = length % 3;
            const numSymbol = (balance === 0) ? result - 1 : result;
            let str = '';
            let cnt = 0;
            let cntSymbol = 0;

            for (let i = length - 1; i >= 0; i--) {
                cnt++;
                str += newData.charAt(i);
                if (cnt === 3 && cntSymbol < numSymbol) {
                    cntSymbol++;
                    str += symbol;
                    cnt = 0;
                }
            }

            return helper.reverseString(str);

        }

        return newData;

    }

    render() {
        return (
            <input type="text" value={this.state.price} onChange={(e) => this.onChangePrice(e.target.value.trim())} />
        );
    }

}