import {connect} from "react-redux";
import {addOne, addAll, delOne, getAll} from "../redux/actions";
import CommentApp from '../components/CommentApp'

export default connect(
    (state) => ({comments: state}),
    {addOne, addAll, delOne, getAll}
)(CommentApp)