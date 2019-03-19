import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Search.css"
import "bootstrap/dist/css/bootstrap.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onKeywordChange = (e) => {
        this.setState({keyword: e.target.value})
    };

    onSearchClick = () => {
        this.props.search(this.state.keyword)
    };

    render() {
        return (
            <div className={"search-box"}>
                <div>
                    <h1>Search Github Users</h1>
                    <div className="row" style={{margin: "1px"}}>
                        <input value={this.state.keyword} onChange={this.onKeywordChange}/>
                        <button onClick={this.onSearchClick}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    search: PropTypes.func.isRequired,
};

export default Search;