import React, { Component } from 'react'

class Search extends Component {

  submitForm = event => {
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.getProfile(value);
    this.refs.username.value = '';
  }

  render() {
    return (
      <div className="search-box">
        <form>
          <label onSubmit={this.submitForm}>
            <input type="search" ref="username" placeholder="Type username"/>
          </label>
        </form>
      </div>
    )
  }
}

export default Search;
