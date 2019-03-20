import React, {Component} from 'react';

// api.github.com/search/repositories?q=r&sort=stars
class MostStarRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repoName: '',
            repoUrl: ''
        }
    }

    url = `https://api.github.com/search/repositories?q=r&sort=stars`;

    componentDidMount() {
        fetch(this.url)
            .then(response => response.json())
            .then(result => {
                const {name, html_url} = result.items[0];
                this.setState({repoName: name, repoUrl: html_url})
            }).catch(error => alert(error.message))
    }

    render() {
        const {repoName, repoUrl} = this.state;
        if (repoName) {
            return <h1>The most star repo is <a href={repoUrl}>{repoName}</a></h1>
        }
        return <h1>Loading ...</h1>
    }
}

MostStarRepo.propTypes = {};

export default MostStarRepo;