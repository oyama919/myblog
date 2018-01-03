import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {blogs: []}

  componentDidMount() {
    fetch('/blogs')
      .then(res => res.json())
      .then(blogs => this.setState({ blogs }));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.blogs.map(blog =>
            <li>{blog.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
