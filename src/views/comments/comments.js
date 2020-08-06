import React from "react";
import iconClose from "./Grupo 4165.svg";
import "./comments.css";

export const Comments = ({
  openModal,
  closeModal,
  postSelected,
  postsComments
}) => {
  const modalName = "comments--modal--container";
  const clickModal = e => e.target.id === modalName && closeModal();

  return (
    <div
      id="comments--modal--container"
      className={`comments--modal--container ${openModal ? "open-modal" : ""}`}
      onClick={clickModal}
    >
      <div
        id="comments--modal--container--content"
        className="comments--modal--container--region"
        onClick={clickModal}
      >
        <PostModalComments
          iconClose={iconClose}
          closeModal={closeModal}
          postSelected={postSelected}
          postsComments={postsComments}
        />
      </div>
    </div>
  );
};

const PostModalComments = ({
  iconClose,
  closeModal,
  postSelected,
  postsComments
}) => {
  return (
    <div className="comments--modal--container--region--content">
      <div className="comments--modal--container--region--content--cancel">
        <img src={iconClose} alt="..." onClick={() => closeModal()} />
      </div>
      <div className="comments--modal--container--region--content--title">
        {postSelected && "POST: " + postSelected.title}
      </div>
      <hr />
      COMMENTS
      <hr />
      <div className="comments--modal--container--region--content--list">
        {postsComments &&
          postsComments.map((post, i) => {
            return (
              <div
                className="comments--modal--container--region--content--list--item"
                key={i}
              >
                <div>{post.email}</div>
                <div>{post.body}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
