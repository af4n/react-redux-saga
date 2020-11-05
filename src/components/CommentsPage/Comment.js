import React from "react"
import userIcon from "../../assets/images/userIcon.png"

export default ({comment}) => (
  <div className="card mb-1 list-group-item-action list-group-item-dark">
    <img className="card-img" src={userIcon} alt="Card image cap" />
      <div className="card-body card-body-comment">
        <p className="card-text ">{comment.body}</p>
      </div>
  </div>
)