import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';


class Github extends Component {
  state = {
    username: 'iuliancarnaru',
    name: '',
    avatar:'',
    repos: '',
    followers:'',
    following: '',
    homeURL: '',
    notFound:''
  }

  getProfile = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
          this.setState({
            username: data.login,
            name: data.name,
            avatar: data.avatar_url,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeURL: data.html_url,
            notFound: data.message
          });
          console.log(this.state);
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.getProfile(this.state.username);
  }


  render() {
    return (
      <div>
        <h2>Welcome {this.props.profile.nickname}</h2>
        <section id="card">
            <Search getProfile={this.getProfile}/>
            <Profile userData={this.state}/>
        </section>
      </div>
    )
  }
}

export default Github;
