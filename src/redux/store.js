import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

import getDataReducer from "./ducks/getDataSlice";
import getPizzaReducer from "./ducks/getPizzaSlice";
import postFileUploadReducer from "./ducks/fileUploadSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  getdata: getDataReducer,
  getpizza: getPizzaReducer,
  fileupload: postFileUploadReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;
