import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import rootSaga from "./rootSaga";
import reducer from "./posts/reducer";
import logger from "redux-logger";
import * as types from "./posts/types";

const initialState = {
  loading: false as boolean,
  posts: [] as Array<types.Post>,
  post: {} as types.ExtendedPost,
  error: "" as string,
  isDeleted: false,
};
export type InitialState = typeof initialState;
export interface SagaStore extends Store {
  sagaTask: Task;
}

const makeStore: MakeStore<InitialState> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore);
