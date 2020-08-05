import React from "react";

import { fetchPosts } from "../actions";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div class='card' key={post.id} style={{ width: 600 }}>
          <div class='card-body'>
            <h5 class='card-title'>{post.title}</h5>
            <UserHeader userId={post.userId} />
            <p class='card-text'>{post.body}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, {
  fetchPosts,
})(PostList);
