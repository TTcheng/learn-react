import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css"

import "./CommentItem.css"
import Comment from '../../entity/Comment'

class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.instanceOf(Comment).isRequired,
        delComment: PropTypes.func.isRequired
    };

    render() {
        const {comment} = this.props;
        return (
            <div className="item-box list-group-item">
                <button className="btn btn-danger float-right" onClick={() => this.props.delComment(comment)}>删除</button>
                <h4>{comment.name}说：</h4>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {comment.content}
                </p>
            </div>
        );
    }
}

export default CommentItem;