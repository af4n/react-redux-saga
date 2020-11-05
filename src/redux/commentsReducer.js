import {CREATE_COMMENT, FETCH_COMMENT} from "./types";

const initialState = {
  comments: [],
  fetchedComments: []
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {...state, comments: [...state.comments, action.payload]}
    case FETCH_COMMENT:
      return {...state, fetchedComments: action.payload}
    default: return state
  }
}