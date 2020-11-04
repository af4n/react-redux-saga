import React from "react"
import PostForm from "./PostForm";
import Posts from "./Posts";
import FetchedPosts from "./FetchedPosts";

export default () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col">
        <PostForm />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Синхронные посты</h2>
        <Posts />
      </div>
      <div className="col">
        <h2>Асинхронные посты</h2>
        <FetchedPosts />
      </div>
    </div>
  </div>
)