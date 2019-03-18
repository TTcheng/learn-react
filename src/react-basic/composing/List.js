import React from "react";
import PropTypes from 'prop-types'

export default class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        )
    }
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
};