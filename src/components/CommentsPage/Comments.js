import React from "react"
import Comment from "./Comment";
import {connect} from "react-redux";

const Comments = ({syncComments}) => {
  if (!syncComments.length) {
    return <p>Комментариев пока нет</p>
  }

  return (
    syncComments.map(comment => <Comment comment={comment} key={comment.id} />)
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    syncComments: state.comments.comments
  }
}

export default connect(mapStateToProps, null)(Comments)