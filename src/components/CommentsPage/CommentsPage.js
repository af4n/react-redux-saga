import React from "react"
import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import FetchedComments from "./FetchedComments";

export default () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col mb-3">
        <CommentsForm />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <h2>Синхронные комментарии</h2>
        <Comments />
      </div>
      <div className="col-6">
        <h2>Асинхронные комментарии</h2>
        <FetchedComments />
      </div>
    </div>
  </div>
)