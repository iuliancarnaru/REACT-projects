import React, { Component } from 'react';
import axios from 'axios';


//https://www.reddit.com/r/space.json

class ApiCall extends Component {
    state = {
        posts: [],
        subr: 'space'
    }

    componentDidMount() {
        this.handleGetReddit();
    }

    handleGetReddit = () => {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        axios.get(`${proxy}https://www.reddit.com/r/${this.state.subr}.json`)
            .then(response => {
                //console.log(response);
                const posts = response.data.data.children.map(obj => obj.data);
                this.setState({
                    posts
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
        <div>
            <h1>{`/r/${this.state.subr}`}</h1>
            <ul>
                {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
        )
    }
}

export default ApiCall;
