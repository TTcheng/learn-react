import React from "react";
import PropTypes from 'prop-types'

export default class Add extends React.Component {
    handleAdd() {
        const todo = this.input.value;
        if (!todo) {
            return;
        }
        this.props.addTodo(todo);
        this.input.value = ''
    }

    render() {
        return (
            <div>
                <input ref={(input) => this.input = input}/>
                <button onClick={() => this.handleAdd()}>Add #{this.props.count + 1}</button>
            </div>
        );
    }
}

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired
};