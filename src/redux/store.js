import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const store = createStore(
  reducer,
  {
    loadingPostsData: false,
    postsData: [],

    loadingUsersData: false,
    usersData: [],

    userSelected: null,
    postSelected: null,

    loadingPostComments: false,
    postsComments: []
  },
  applyMiddleware(logger, thunk)
  //   window.devToolsExtension && window.devToolsExtension()
);

export default function reducer(state, action) {
  switch (action.type) {
    case LOAD_POSTS_DATA:
      return {
        ...state,
        loadingPostsData: true
      };
    case SET_POSTS_DATA:
      return {
        ...state,
        loadingPostsData: false,
        postsData: action.payload
      };

    case LOAD_USERS_DATA:
      return {
        ...state,
        loadingUsersData: true
      };
    case SET_USERS_DATA:
      return {
        ...state,
        loadingUsersData: false,
        usersData: action.payload
      };

    case LOAD_POST_COMMENTS:
      return {
        ...state,
        loadingPostComments: true
      };
    case SET_POST_COMMENTS:
      return {
        ...state,
        loadingPostComments: false,
        postsComments: action.payload
      };

    case SET_USER_SELECTED:
      return {
        ...state,
        userSelected: action.payload
      };
    case SET_POST_SELECTED:
      return {
        ...state,
        postSelected: action.payload
      };

    default:
      return state;
  }
}
