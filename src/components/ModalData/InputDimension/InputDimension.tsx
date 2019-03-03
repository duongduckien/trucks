import * as React from 'react';
import './styles.scss';

// Utilities
import { Helper } from '../../../utilities/helper';

const helper = new Helper();

interface IProps {
    onDimension: (value: any) => void;
}

interface IState {
    dimension: {
        l: number;
        w: number;
        h: number;
    };
}

export class InputDimension extends React.Component<IProps, IState> {

    state = {
        dimension: {
            l: 0,
            w: 0,
            h: 0,   
        },
    };

    constructor(props: any) {
        super(props);
    }

    onChangeDimension(type: string, value: any) {
        
        if (helper.isNumber(value)) {

            const num = parseInt(value, 10);

            switch (type) {
                case 'l': {
                    const dimension = { ...this.state.dimension, ...{ l: num } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                case 'w': {
                    const dimension = { ...this.state.dimension, ...{ w: num } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                case 'h': {
                    const dimension = { ...this.state.dimension, ...{ h: num } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                default: {
                    break;
                }
            }

        } else if (value.trim() === '') {

            switch (type) {
                case 'l': {
                    const dimension = { ...this.state.dimension, ...{ l: 0 } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                case 'w': {
                    const dimension = { ...this.state.dimension, ...{ w: 0 } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                case 'h': {
                    const dimension = { ...this.state.dimension, ...{ h: 0 } };
                    this.setState({ dimension });
                    this.props.onDimension(dimension);
                    break;
                }
                default: {
                    break;
                }
            }

        }

    }

    render() {
        return (
            <div className="dimension">
                <div className="input-field">
                    <input type="number" min="0" onChange={(e) => this.onChangeDimension('l', e.target.value)} />
                    <span>-</span>
                </div>
                <div className="input-field">
                    <input type="number" min="0" onChange={(e) => this.onChangeDimension('w', e.target.value)} />
                    <span>-</span>
                </div>
                <div className="input-field">
                    <input type="number" min="0" onChange={(e) => this.onChangeDimension('h', e.target.value)} />
                </div>
            </div>
        );
    }

}