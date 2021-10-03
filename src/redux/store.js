import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}
