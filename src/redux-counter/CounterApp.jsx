import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import * as actions from './redux/actions'

class CounterApp extends Component {
    render() {
        const {store} = this.props;
        return (
            <div className="container">
                <p className="card-text">Current value is {store.getState()}</p>
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
        this.props.store.dispatch(actions.increment(selected))
    };

    decrease = () => {
        const selected = this.select.value * 1;
        this.props.store.dispatch(actions.decrement(selected))
    };

    increaseIfOdd = () => {
        const {store} = this.props;
        const currentCount = store.getState();
        if (currentCount & 1) {
            const selected = this.select.value * 1;
            store.dispatch(actions.increment(selected))
        }
    };

    increaseAsync = () => {
        setTimeout(() => {
            const {store} = this.props;
            const selected = this.select.value * 1;
            store.dispatch(actions.increment(selected))
        }, 1000);
    }
}

export default CounterApp;