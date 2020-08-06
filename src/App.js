import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadPostsData,
  setPostsData,
  loadUsersData,
  setUsersData
} from "./redux/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./views/navbar/navbar";
import { Graphs } from "./views/graphs/graphs";
import { Posts } from "./views/posts/posts";
import { Home } from "./views/home/home";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPostsData = async () => {
      try {
        dispatch(loadPostsData());
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        dispatch(setPostsData(data));
      } catch (error) {
        console.log(error);
      }
    };
    getPostsData();
    /* ************************** */
    const getUsersData = async () => {
      try {
        dispatch(loadUsersData());
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch(setUsersData(data));
      } catch (error) {
        console.log(error);
      }
    };
    getUsersData();
  });

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/graphs" component={Graphs} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
