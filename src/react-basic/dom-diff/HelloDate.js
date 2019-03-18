import React from 'react'
import ReactDOM from 'react-dom'

// DOM DIFF算法保证最小化更新，在此例子中，更新时间时，不会更新input

class HelloDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    static stop() {
        ReactDOM.unmountComponentAtNode(document.getElementById('example'))
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <input/>
                <p>{this.state.date.toTimeString()}</p>
                <button onClick={HelloDate.stop}>Stop</button>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

}

ReactDOM.render(<HelloDate/>, document.getElementById('example'));