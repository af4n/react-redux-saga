import React from "react"
import Comment from "./Comment";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../redux/actions";
import {Loader} from "../Loader";

export default () => {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments.fetchedComments)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Loader />
  }

  if (!comments.length) {
    return <button className="btn btn-dark"
                   onClick={() => dispatch(fetchComments())}>Загрузить</button>
  }

  return (
    comments.map(comment => <Comment comment={comment} key={comment.id} />)
  )
}