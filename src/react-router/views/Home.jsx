import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="nav-link" to={"/home/message"} activeClassName={"active"}>Message</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to={"/home/news"} activeClassName={"active"}>News</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path={"/home/news"} component={News}/>
                    <Route path={"/home/message"} component={Message}/>
                    <Redirect to={"/home/message"}/>
                </Switch>
            </div>
        );
    }
}

export default Home;