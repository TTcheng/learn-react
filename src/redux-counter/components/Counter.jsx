import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import * as PropTypes from "prop-types";

export default class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="container">
                <p className="card-text">Current value is {this.props.count}</p>
                <div className="mt-2 form-group">
                    <select id={"select"} className="form-control" ref={(select) => this.select = select}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <div className="mt-2 btn-group">
                        <button className="btn btn-primary" onClick={this.increase}>+</button>
                        <button className="btn btn-primary" onClick={this.decrease}>-</button>
                        <button className="btn btn-primary" onClick={this.increaseIfOdd}>add if odd</button>
                        <button className="btn btn-primary" onClick={this.increaseAsync}>add async</button>
                    </div>
                </div>
            </div>
        );
    }

    increase = () => {
        const selected = this.select.value * 1;
        this.props.increment(selected)
    };

    decrease = () => {
        const selected = this.select.value * 1;
        this.props.decrement(selected)
    };

    increaseIfOdd = () => {
        const currentCount = this.props.count;
        if (currentCount & 1) {
            const selected = this.select.value * 1;
            this.props.increment(selected)
        }
    };

    increaseAsync = () => {
        setTimeout(() => {
            const selected = this.select.value * 1;
            this.props.increment(selected)
        }, 1000);
    }
}