import {
  LOAD_POSTS_DATA,
  SET_POSTS_DATA,
  LOAD_USERS_DATA,
  SET_USERS_DATA,
  SET_USER_SELECTED,
  LOAD_POST_COMMENTS,
  SET_POST_COMMENTS,
  SET_POST_SELECTED
} from "./actionTypes";

export const loadPostsData = () => ({
  type: LOAD_POSTS_DATA
});

export const setPostsData = data => ({
  type: SET_POSTS_DATA,
  payload: data
});

export const loadUsersData = () => ({
  type: LOAD_USERS_DATA
});

export const setUsersData = data => ({
  type: SET_USERS_DATA,
  payload: data
});

export const setUserSelected = user => ({
  type: SET_USER_SELECTED,
  payload: user
});

export const loadPostComments = () => ({
  type: LOAD_POST_COMMENTS
});

export const setPostComments = data => ({
  type: SET_POST_COMMENTS,
  payload: data
});

export const setPostSelected = post => ({
  type: SET_POST_SELECTED,
  payload: post
});
// export const mapCustomUsers = res => {
//   const response = res.data.map(user => customUser(user));
//   return response;
// };

// const customUser = user => {
//   return {
//     id: user.id,
//     name: user.name,
//     email: user.email
//   };
// };

// export const getUsers = () => {
//   return dispatch => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
//       dispatch({
//         type: GET_USERS,
//         payload: mapCustomUsers(res)
//       })
//     );
//   };
// };

// export const removeUser = id => ({
//   type: REMOVE_USER,
//   payload: id
// });

// export const addUser = user => ({
//   type: ADD_USER,
//   payload: user
// });

// export const setAuth = () => ({
//   type: SET_AUTH
// });
