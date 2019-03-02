import * as React from 'react';
import './styles.scss';

// Utilities
import { Helper } from '../../../utilities/helper';

const helper = new Helper();

interface IProps {
    maxLength?: number;
    valueDefault?: string;
    onTextArea: (value: any) => void;
}

interface IState {
    textLength: number;
}

export class InputTextArea extends React.Component<IProps, IState> {

    state = {
        textLength: 0,
    };

    constructor(props: any) {
        super(props);
    }

    onChangeTextArea(value: string) {
        this.setState({ textLength: value.length });
        this.props.onTextArea(value);
    }

    renderCounter() {
        if (this.props.maxLength && this.props.maxLength > 0) {
            return (
                <p>{this.state.textLength}/{this.props.maxLength}</p>
            );
        }
        return false;
    }

    render() {
        return (
            <div className="input-textarea">
                <textarea 
                    defaultValue={this.props.valueDefault ? this.props.valueDefault : ''} 
                    onChange={(e) => this.onChangeTextArea(e.target.value)}
                ></textarea>
                {this.renderCounter()}
            </div>
        );
    }

}