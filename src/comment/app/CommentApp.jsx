import React, {Component} from 'react';
import "./CommentApp.css"
import CommentAdd from "../comment-add/CommentAdd"
import CommentList from "../comment-list/CommentList"
import "bootstrap/dist/css/bootstrap.min.css"
import Comment from '../Comment'

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    // 模拟异步请求
    componentDidMount() {
        const comments = Array.of(
            new Comment("张三", "太难了！"),
            new Comment("李四", "不想学了！"),
            new Comment("王五", "回家种田吧！"),
        );
        setTimeout(() => {
            this.setState({comments})
        }, 1000);
    }

    addComment = (comment) => {
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments})
    };
    delComment = (index) => {
        let {comments} = this.state;
        comments.splice(index, 1);
        console.log(comments);
        this.setState({comments});
    };

    render() {
        return (
            <div className="container">
                <div className={"title-box"}>
                    <h1 className={"title"}>请发表对React的评论</h1>
                </div>
                <div className={"row"}>
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} delComment={this.delComment}/>
                </div>
            </div>
        );
    }
}

export default CommentApp;