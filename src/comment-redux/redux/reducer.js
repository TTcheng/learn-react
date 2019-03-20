import {ADD_ALL, ADD_ONE, DEL_ONE} from "./action-types";
import List from '../utils/List'

export function commentReducer(state = List.emptyList(), action) {
    let newState = new List(state);
    switch (action.type) {
        case ADD_ONE:
            newState.append(action.data);
            return newState;
        case DEL_ONE:
            newState.remove(action.data);
            return newState;
        case ADD_ALL:
            newState.appendAll(action.data);
            return newState;
        default:
            return state;
    }
}