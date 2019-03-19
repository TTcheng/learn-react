import {INCREMENT, DECREMENT} from "./action-types";
// action creators
export const increment = (data) => ({type: INCREMENT, data: data});
export const decrement = (data) => ({type: DECREMENT, data: data});