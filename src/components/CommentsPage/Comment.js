import React from "react"

export default ({comment}) => (
  <div className="card mb-1">
    <img className="card-img-left" src="" alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{comment.comment}</p>
      </div>
  </div>
)