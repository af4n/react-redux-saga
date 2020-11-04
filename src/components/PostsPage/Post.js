import React from "react"

export default ({post}) => (
  <div className="card mb-1">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
    </div>
  </div>
)