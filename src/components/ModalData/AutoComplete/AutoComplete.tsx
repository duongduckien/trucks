import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

interface IProps {
    list: any;
    chips: boolean;
    onSelectType: (item: any) => void;
}

interface IState {
    listMatch: any[];
    inputVal: string;
    listChips: any[];
}

export class AutoComplete extends React.Component<IProps, IState> {

    state = {
        listMatch: [],
        inputVal: '',
        listChips: [],
    };

    constructor(props: any) {
        super(props);
    }

    handleOnChange(e) {

        this.setState({ inputVal: e.target.value });

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
            this.setState({ listMatch });
        } else {
            this.setState({ listMatch: [] });
            this.props.onSelectType(this.state.listChips);
        }

    }

    renderListMatch() {
        const listMatch = this.state.listMatch;
        if (listMatch.length > 0) {
            return (
                <div className="list-data">
                    <ul>
                        {
                            listMatch.map((item: any, index: number) => {
                                return <li key={index} onClick={() => this.handleClick(item)}>{item.name}</li>;
                            })
                        }
                    </ul>
                </div>
            );
        }
    }

    renderChips() {
        if (this.props.chips) {
            if (this.state.listChips.length > 0) {
                return (
                    <div className="list-chips">
                        <Row className="show-grid">
                            {
                                this.state.listChips.map((item: any, index: number) => {
                                    return this.renderChipItem(item, index);
                                })
                            }
                        </Row>
                    </div>
                );
            }
        }
    }

    renderChipItem(item: any, index: any) {
        return (
            <Col xs={12} md={4} key={index}>
                <div className="row">
                    <div className="chip">
                        <span>
                            <i
                                className="fa fa-times"
                                aria-hidden="true"
                                onClick={() => this.removeChip(item)}
                            ></i>
                            <span className="chip-text">{item.name}</span>
                        </span>
                    </div>
                </div>
            </Col>
        );
    }

    handleClick(item: any) {

        if (this.props.chips) {

            const listChips = this.state.listChips;

            if (listChips.length > 0) {

                let flag = true;

                for (const el of listChips) {
                    if (el.id === item.id) {
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    listChips.push(item);
                }

            } else {
                listChips.push(item);
            }

            this.setState({ listChips });
            this.resetListMatch();
            this.resetInput();
            this.handleSelectChips(this.state.listChips);

        } else {

            this.setState({
                listMatch: [],
                inputVal: item.name,
            });

            this.props.onSelectType(item);

        }

    }

    removeChip(item: any) {
        const arrChipsNew = [];
        if (this.state.listChips.length > 0) {
            for (const el of this.state.listChips) {
                if (el.id !== item.id) {
                    arrChipsNew.push(el);
                }
            }
        }
        this.setState({ listChips: arrChipsNew });
        this.handleSelectChips(arrChipsNew);
    }

    handleSelectChips(chips: any) {
        const arr = [];
        if (chips.length > 0) {
            for (const el of chips) {
                arr.push(el.id);
            }
        }
        this.props.onSelectType(arr);
    }

    resetListMatch() {
        this.setState({ listMatch: [] });
    }

    resetInput() {
        this.setState({ inputVal: '' });
    }

    render() {
        return (
            <div className="autocomplete">
                <input
                    type="text"
                    onChange={(e) => this.handleOnChange(e)}
                    value={this.state.inputVal}
                />
                {this.renderListMatch()}
                {this.renderChips()}
            </div>
        );
    }

}