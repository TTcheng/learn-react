import React from "react";
import Add from './Add'
import List from './List'
import * as ReactDOM from "react-dom";

// 组件的组合使用
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['吃饭', '睡觉', '打豆豆']};
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(todo) {
        const {todos} = this.state;
        todos.unshift(todo);
        this.setState(todos)
    }


    render() {
        const {todos} = this.state;
        return (
            <div>
                <h1>Simple todo list</h1>
                <Add count={todos.length} addTodo={this.addTodo}/>
                <List todos={todos}/>
            </div>
        );
    }
}

ReactDOM.render(<TodoList/>, document.getElementById("example"));