import React, {Component} from 'react';

class News extends Component {
    state = {
        newsArr: [
            "News001",
            "News002",
            "News003",
        ]
    };

    render() {
        return (
            <div className="nav-item">
                <ul className="list-group">
                    {
                        this.state.newsArr.map((news, index) => {
                            return <li className="list-group-item" key={index}>{news}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default News;