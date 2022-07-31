import NewsList from "./Components/NewsList";
import React from "react";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((users) => this.setState({ posts: users }));
  }

  render() {
    return (
      <div>
        <div className="navi">
          <h1 className="tc f1 bg-light-green">NEWSPAPER</h1>
          <Navbar/>
        </div>
        <NewsList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
