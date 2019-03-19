import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentItem from "../comment-item/CommentItem"
import "bootstrap/dist/css/bootstrap.css"

class CommentList extends Component {
    render() {
        return (
            <div className={"container col-sm-8 comment-box"}>
                <h2>评论回复：</h2>
                {this.props.comments.map((comment, index) =>
                    <CommentItem index={index} key={index} who={comment.name} comment={comment.content}
                                 delComment={this.props.delComment}/>)}
            </div>
        );
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired,
};

export default CommentList;