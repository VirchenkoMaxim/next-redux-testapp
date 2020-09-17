import { all } from "redux-saga/effects";
import { postsSagas } from "./posts";

function* rootSaga() {
  yield all([postsSagas.postsWatcher()]);
}

export default rootSaga;
