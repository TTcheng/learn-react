import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
// import CommentApp from './comment/app/CommentApp';
// import App from './fetch/MostStarRepo';
// import App from './github-users/app/SearchUser';
import RouterApp from './react-router/components/App';// Router DEMO
import CounterApp from './redux-counter/containers/App';// Redux demo :counter
import CommentApp from './comment-redux/containers/App';// comment redux
import * as serviceWorker from './serviceWorker';
// import store from './redux-counter/redux/store'
import store from './comment-redux/redux/store' // comment store
import {Provider} from "react-redux";

// ReactDOM.render(<App/>, document.getElementById('root'));

// redux版CommentAPP
ReactDOM.render(<Provider store={store}><CommentApp/></Provider>, document.getElementById('root'));

// 使用react-router 管理路由
// ReactDOM.render((
//     <BrowserRouter>
//         <RouterApp/>
//     </BrowserRouter>
// ), document.getElementById('root'));


// 使用redux管理状态
// function render() {
//     ReactDOM.render(<CounterApp store={store}/>, document.getElementById('root'));
// }
// render();
// store.subscribe(render);

// 使用react-redux管理状态
// ReactDOM.render(<Provider store={store}><CounterApp/></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
