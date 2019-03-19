import {connect} from "react-redux";
import * as actions from "../redux/actions";
import Counter from '../components/Counter'

export default connect(
    (state) => ({count: state}),
    {increment: actions.increment, decrement: actions.decrement}
)(Counter)