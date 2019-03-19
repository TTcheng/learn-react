import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from "react-router-dom";
import About from '../views/About'
import Home from '../views/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
/*
1.编写路由组件
2.在父路由组件中指定
    a.路由链接<Link/>
    b.路由<Route/>
 */
class App extends Component {
    render() {
        return (
            <div>
                <div className={"row"}>
                    <div className={"col-sm-8 offset-2"}>
                        <div className={"page-header"}><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-sm-2 offset-2"}>
                        <div className={"list-group"}>
                            <NavLink className={"list-group-item"} to={"/home"}
                                     activeClassName={"active"}>Home</NavLink>
                            <NavLink className={"list-group-item"} to={"/about"}
                                     activeClassName={"active"}>About</NavLink>
                        </div>
                    </div>
                    <div className={"col-sm-6"}>
                        <div className={"panel"}>
                            <div className={"panel-body"}>
                                <Switch>
                                    <Route path={"/home"} component={Home}/>
                                    <Route path={"/about"} component={About}/>
                                    <Redirect to={"/home"}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;