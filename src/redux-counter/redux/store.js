import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {counter} from "./reducers";

const store = createStore(counter, applyMiddleware(thunk));
export default store;