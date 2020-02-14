import { ArticleReducers } from "./reducers/ArticleReducers";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore (ArticleReducers, applyMiddleware(thunk))

export default store