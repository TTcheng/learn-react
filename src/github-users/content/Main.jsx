import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'

class Main extends Component {
    render() {
        const {users, loading} = this.props;
        if (loading) {
            return <div>Loading...</div>
        }
        if (users && users.length > 0) {
            return <div className="row" style={{margin: "1px"}}>
                {
                    users.map((user) => (
                        <div className="card" key={user.html_url}>
                            <a href={user.html_url} target="_blank">
                                <img src={user.avatar_url} style={{width: '100px'}} alt='user'/>
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    ))
                }
            </div>
        }
        return <div>请输入关键字，然后点击搜索。</div>;
    }
}

Main.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Main;