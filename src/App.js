import React from "react"
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Navbar from "./components/Navbar";
import PostsPage from "./components/PostsPage/PostsPage";
import CommentsPage from "./components/CommentsPage/CommentsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/*<Route path={"/"} exact component={HomePage} />*/}
        <Route path={"/posts"} exact component={PostsPage} />
        <Route path={"/comments"} exact component={CommentsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
