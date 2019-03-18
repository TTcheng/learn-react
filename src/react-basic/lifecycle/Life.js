import React from "react";
import * as ReactDOM from "react-dom";

// 此例子在componentDidMount初始化循环定时器
// 中componentWillUnmount清楚定时器，防止内存泄漏
export default class Life extends React.Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 1};
    }

    componentDidMount() {
        this.intervalId = setInterval(function () {
            let {opacity} = this.state;
            opacity -= 0.1;
            if (opacity <= 0) {
                opacity = 1;
            }
            this.setState({opacity})
        }.bind(this), 200);
    }

    render() {
        return (
            <div>
                <h1 style={{opacity: this.state.opacity}}>React太难了</h1>
                <button onClick={() => Life.enough()}>不学了</button>
            </div>
        )
    }

    componentWillUnmount() {
        // 清除循环定时器，防止内存泄露，
        clearInterval(this.intervalId)
    }

    static enough() {
        ReactDOM.unmountComponentAtNode(document.getElementById('example'))
    }
}

ReactDOM.render(<Life/>, document.getElementById('example'));