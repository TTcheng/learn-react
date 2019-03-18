import React from "react";

// 三大属性之state
class Like extends React.Component {
    constructor(props, context, likeMe) {
        super(props, context);
        this.state = {likeMe};
        // this.handleState = this.handleState.bind(this);
        // 更好的写法是在调用时使用箭头函数
    }

    handleState() {
        this.setState({likeMe: !this.state.likeMe})
    }

    render() {
        if (this.state.likeMe) {
            return <h2 onClick={() => this.handleState()}>你喜欢我</h2>
        }
        return <h2 onClick={this.handleState}>我喜欢你</h2>
    }
}