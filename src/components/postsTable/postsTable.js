import React from "react";
import "./postsTable.css";

export const PostsTable = ({ filteredPosts, selectPostAndShowComments }) => {
  return (
    <>
      <div className="posts--main--container--table--header">
        <div>User ID</div>
        <div>ID Post</div>
        <div>Title</div>
        <div>Body</div>
      </div>
      <div className="posts--main--container--table--data">
        {filteredPosts &&
          filteredPosts.map((post, i) => {
            return (
              <div
                className="posts--main--container--table--data--item"
                onClick={() => selectPostAndShowComments(post)}
                key={i}
              >
                <div>{post.userId}</div>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};
