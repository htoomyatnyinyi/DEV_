import { takeLatest } from "redux-saga/effects";

import { get_data } from "../ducks/getDataSlice";
import { handelGetData } from "./handler/getData";

import { get_pizza } from "../ducks/getPizzaSlice";
import { handelGetPizza } from "./handler/getPizza";

import { set_file } from "../ducks/fileUploadSlice";
import { handelPostFile } from "./handler/fileUpload";

export function* watcherSaga() {
  yield takeLatest(get_data, handelGetData);
  yield takeLatest(get_pizza, handelGetPizza);
  yield takeLatest(set_file, handelPostFile);
}
