import {ADD_ALL, ADD_ONE, DEL_ONE} from "./action-types";
import Comment from "../entity/Comment";

export const addOne = (data) => ({type: ADD_ONE, data: data});
export const delOne = (data) => ({type: DEL_ONE, data: data});
export const addAll = (data) => ({type: ADD_ALL, data: data});
export const getAll = () => {
    return (dispatch) => {
        const comments = Array.of(
            new Comment("张三", "太难了！"),
            new Comment("李四", "不想学了！"),
            new Comment("王五", "回家种田吧！"),
        );
        //mock fetch 模拟异步请求
        setTimeout(() => dispatch(addAll(comments)), 1000)
    }
};
// export const get = (data) => {
//     return (dispatch) => {
//         //fetch
//         setTimeout(() => dispatch(add(data)), 1000)
//     }
// };