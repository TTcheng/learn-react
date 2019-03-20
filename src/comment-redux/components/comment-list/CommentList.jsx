import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css"

import List from '../../utils/List'
import CommentItem from "../comment-item/CommentItem"

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.instanceOf(List).isRequired,
        delComment: PropTypes.func.isRequired,
    };

    render() {
        const {comments, delComment} = this.props;
        if (comments.isEmpty()) {
            return <h2>暂无评论，请在左侧添加</h2>
        }
        return (
            <div className={"container col-sm-8 comment-box"}>
                <h2>评论回复：</h2>
                <div className="list-group">
                    {comments.toArray().map((comment, index) =>
                        <CommentItem key={index} comment={comment} delComment={delComment}/>)}
                </div>
            </div>
        );
    }
}

export default CommentList;