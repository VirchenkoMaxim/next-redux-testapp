// import { applyMiddleware, combineReducers, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { postsReducer } from "./posts";
// import rootSaga from "./rootSaga";

// export const rootReducer = combineReducers({
//   posts: postsReducer,
// });

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// global.store = store;
// export default store;

import { createStore, applyMiddleware, Store } from "redux";
import logger from "redux-logger";
import createSagaMiddleware, { Task } from "redux-saga";
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import rootSaga from "./rootSaga";
import reducer, { InitialState } from "./posts/reducer";

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
