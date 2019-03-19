import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import MessageDetail from "./MessageDetail";

// React router 跳转，传递路由参数
class Message extends Component {
    state = {
        messages: [
            {id: 1, title: "message001", content: "Content 1"},
            {id: 2, title: "message002", content: "Content 2"},
            {id: 3, title: "message003", content: "Content 3"},
        ]
    };

    render() {
        return (
            <div className="nav-item">
                <ul className="list-group">
                    {
                        this.state.messages.map((message, index) =>
                            <li className="list-group-item" key={index}>
                                <div className="btn-group">
                                    <NavLink className="btn-link" to={`/home/message/detail/${message.id}`}>{message.title}</NavLink>
                                    <button className="btn-light"
                                            onClick={() => this.props.history.push(`/home/message/detail/${message.id}`)}>查看详情push
                                    </button>
                                    <button className="btn-light"
                                            onClick={() => this.props.history.replace(`/home/message/detail/${message.id}`)}>查看详情replace
                                    </button>
                                </div>
                            </li>)
                    }
                </ul>
                <Route path="/home/message/detail/:id" component={MessageDetail}/>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => this.props.history.goBack()}>回退</button>
                    <button className="btn btn-primary" onClick={() => this.props.history.goForward()}>前进</button>
                </div>
            </div>
        );
    }
}

export default Message;