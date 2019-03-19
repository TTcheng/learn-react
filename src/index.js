import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
// import App from './react-basic/CommentApp';
// import CommentApp from './comment/app/CommentApp';
// import App from './fetch/MostStarRepo';
// import App from './github-users/app/SearchUser';
import App from './react-router/components/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
