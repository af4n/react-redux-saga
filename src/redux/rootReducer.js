import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  comments: commentsReducer
})