import React, {Component} from 'react';
import Main from "../content/Main"
import Search from "../search/Search"

import "./SearchUser.css"

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    search = (keyword) => {
        if (!keyword) {
            return;
        }
        const url = `https://api.github.com/search/users?q=${keyword}`;
        this.setState({loading: true});
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({users: data.items, loading: false})
            })
            .catch(error => {
                alert(error.message);
                this.setState({loading: false})
            })
    };

    render() {
        return (
            <div className={"main-box"}>
                <Search search={this.search}/>
                <Main users={this.state.users} loading={this.state.loading}/>
            </div>
        );
    }
}

export default SearchUser;