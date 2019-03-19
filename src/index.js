import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
// import App from './react-basic/CommentApp';
// import CommentApp from './comment/app/CommentApp';
// import App from './fetch/MostStarRepo';
// import App from './github-users/app/SearchUser';
import RouterApp from './react-router/components/App';// Router DEMO
import CounterApp from './redux-counter/CounterApp';// Redux demo :counter
import * as serviceWorker from './serviceWorker';
import store from './redux-counter/redux/store'

// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render((
//     <BrowserRouter>
//         <RouterApp/>
//     </BrowserRouter>
// ), document.getElementById('root'));


// 使用redux管理状态
function render() {
    ReactDOM.render(<CounterApp store={store}/>, document.getElementById('root'));
}
render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
