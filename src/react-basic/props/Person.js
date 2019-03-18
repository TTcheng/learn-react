import React from 'react'
import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// 三大属性之props
function Person(props) {
    return (
        <ul>
            <li>姓名:{props.name}</li>
            <li>年龄:{props.age}</li>
            <li>性别:{props.render}</li>
        </ul>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    render: PropTypes.string,
};

Person.defaultProps = {
    age: 18,
    render: 'M'
};

const p1 = {
    name: 'tom',
    age: 10,
    render: 'M'
};
const p2 = {
    name: 'jesse'
};

ReactDOM.render(<Person {...p1}/>, document.getElementById('person1'));
ReactDOM.render(<Person {...p2}/>, document.getElementById('person2'));