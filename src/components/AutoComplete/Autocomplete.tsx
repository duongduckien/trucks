import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

interface IProps {
    list: any;
}

interface IState {
    listMatch: any[];
}

export class AutoComplete extends React.Component<IProps, IState> {

    state = {
        listMatch: [],
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="autocomplete">
                <input
                    type="text"
                    onChange={(e) => this.handleOnChange(e)}
                    onBlur={() => this.handleOnBlur()}
                />
                {this.renderListMatch()}
            </div>
        );
    }

    private handleOnChange(e) {

        if (e.target.value.trim() !== '') {
            const listMatch = [];
            const list = this.props.list;
            if (list.length > 0) {
                for (const item of list) {
                    if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                        listMatch.push(item);
                    }
                }
            }
            this.setState({listMatch});
        } else {
            this.setState({listMatch: []});
        }

    }

    private renderListMatch() {
        const listMatch = this.state.listMatch;
        if (listMatch.length > 0) {
            return (
                <div className="list-data">
                    <ul>
                        {
                            listMatch.map((item: any, index: number) => {
                                return <li key={index}>{item.name}</li>;
                            })
                        }
                    </ul>
                </div>
            );
        }
    }

    private handleOnBlur() {
        console.log('handleOnBlur');
    }

}