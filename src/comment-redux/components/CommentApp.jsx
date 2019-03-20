import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css"

import "./CommentApp.css"
import CommentAdd from "../components/comment-add/CommentAdd"
import CommentList from "../components/comment-list/CommentList"
import List from "../utils/List";

class CommentApp extends Component {
    static propTypes = {
        comments: PropTypes.instanceOf(List).isRequired,
        addOne: PropTypes.func.isRequired,
        delOne: PropTypes.func.isRequired,
        addAll: PropTypes.func.isRequired,
        getAll: PropTypes.func.isRequired,
    };

    // 模拟异步请求
    componentDidMount() {
        this.props.getAll();
    }

    render() {
        const {addOne, delOne, comments} = this.props;
        return (
            <div className="container">
                <div className={"title-box"}>
                    <h1 className={"title"}>请发表对React的评论</h1>
                </div>
                <div className={"row"}>
                    <CommentAdd addComment={addOne}/>
                    <CommentList comments={comments} delComment={delOne}/>
                </div>
            </div>
        );
    }
}

export default CommentApp;