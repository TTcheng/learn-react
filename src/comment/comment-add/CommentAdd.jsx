import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./CommentAdd.css"
import "bootstrap/dist/css/bootstrap.css"
import Comment from "../Comment"

class CommentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        }
    }

    handleSubmit = () => {
        const comment = new Comment(this.state.username, this.state.content);
        this.props.addComment(comment)
    };

    handleContentChange = (event) => {
        this.setState({content: event.target.value})
    };
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    render() {
        return (
            <div className="col-sm-4 submit-box form-group">
                <label htmlFor={"username"}>用户名</label><br/>
                <input id={"username"} className={"input-name form-control"} value={this.state.username}
                       onChange={this.handleUsernameChange}/><br/>
                <label htmlFor={"comment"}>评论内容</label><br/>
                <textarea id={"comment"} className={"input-area form-control"} value={this.state.content}
                          onChange={this.handleContentChange}/><br/>
                <button className={"submit-btn form-control"} onClick={this.handleSubmit}>提交</button>
            </div>
        );
    }
}

CommentAdd.propTypes = {
    addComment: PropTypes.func.isRequired
};

export default CommentAdd;