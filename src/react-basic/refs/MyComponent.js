import React from "react";
import * as ReactDOM from "react-dom";

// 三大属性之refs
export default class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <input type="text" ref={input => this.firstInput = input}/>&nbsp;&nbsp;
                <button onClick={() => this.showInput()}>提示输入</button>
                &nbsp;&nbsp;
                <input type="text" onBlur={MyComponent.handleBlur} placeholder={"失去焦点提示内容"}/>
            </div>
        );
    }

    showInput() {
        alert(this.firstInput.value)
    }

    static handleBlur(e) {
        alert(e.target.value)
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById("example"));