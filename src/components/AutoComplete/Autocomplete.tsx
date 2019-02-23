import * as React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Autocomplete extends React.Component<{}> {

    constructor(props: any) {
        super(props);
        // this.keyUp.map(event => event.target.value)
        // .debounceTime(300)
        // .distinctUntilChanged()
        // .flatMap(search => Observable.of(search).delay(0))
        // .subscribe((data) => {
        //     this.onChangeInput(data);
        // });

        // const input = document.getElementById('example');

        // //for every keyup, map to current input value
        // const example = fromEvent(input, 'keyup').pipe(map(i => i.currentTarget.value));

    }

    printChange(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="autocomplete">
                <input
                    type="text"
                    onKeyUp={(e) => this.printChange(e)}
                />
                <div className="list-data">
                    <ul>
                        <li>dsdadsaa</li>
                        <li>dsdadsaa</li>
                        <li>dsdadsaa</li>
                        <li>dsdadsaa</li>
                        <li>dsdadsaa</li>
                    </ul>
                </div>
            </div>
        );
    }

}