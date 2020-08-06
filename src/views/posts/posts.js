import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SimpleSelect } from "../../components/simpleSelect/simpleSelect";
import {
  setUserSelected,
  loadPostComments,
  setPostComments,
  setPostSelected
} from "../../redux/actions";
import { PostsTable } from "../../components/postsTable/postsTable";
import { Comments } from "../comments/comments";
import {
  filteredUsers,
  filteredPosts
} from "../../helperFunctions/posts/functions";
import "./posts.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {
    postsData,
    usersData,
    userSelected,
    postSelected,
    postsComments
  } = state;

  const [openModalFinish, setOpenModalFinish] = useState(false);

  const setSelection = option => dispatch(setUserSelected(option));

  const selectPostAndShowComments = async post => {
    dispatch(setPostSelected(post));
    dispatch(loadPostComments());
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      const data = await response.json();
      dispatch(setPostComments(data));
    } catch (error) {
      console.log(error);
    }
    setOpenModalFinish(x => !x);
  };

  return (
    <div className="posts--main--container">
      <SimpleSelect
        title="Select User"
        placeholderSelection="Filter posts by user"
        options={filteredUsers(usersData)}
        selection={userSelected}
        setSelection={setSelection}
      />
      <div className="posts--main--container--table">
        {userSelected &&
          `Total: ${
            filteredPosts(postsData, userSelected).length
          } Posts For User Number: ${userSelected.value}`}
        <PostsTable
          filteredPosts={filteredPosts(postsData, userSelected)}
          selectPostAndShowComments={selectPostAndShowComments}
        />
      </div>
      <Comments
        postsComments={postsComments}
        postSelected={postSelected}
        openModal={openModalFinish}
        closeModal={() => {
          setOpenModalFinish(false);
          dispatch(setPostComments([]));
          dispatch(setPostSelected(null));
        }}
      />
    </div>
  );
};
