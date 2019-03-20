import {INCREMENT, DECREMENT} from "./action-types";
// action creators
export const increment = (data) => ({type: INCREMENT, data: data});
export const decrement = (data) => ({type: DECREMENT, data: data});
export const incrementAsync = (data) => {
    return (dispatch) => {
        setTimeout(() => dispatch(increment(data)), 1000)
    }
};