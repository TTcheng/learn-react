import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css"
import "./CommentItem.css"

class CommentItem extends Component {
    handleDelete = () => {
        this.props.delComment(this.props.index);
    };

    render() {
        return (
            <div className="item-box">
                <button className={"del-btn"} onClick={this.handleDelete}>删除</button>
                <h4>{this.props.who}说：</h4>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.props.comment}
                </p>
            </div>
        );
    }
}

CommentItem.propTypes = {
    index: PropTypes.number.isRequired,
    who: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    delComment: PropTypes.func.isRequired
};

export default CommentItem;