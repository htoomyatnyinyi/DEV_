import { call, put } from "redux-saga/effects";
import { requestGetData } from "../api/getData";
import { set_data } from "../../ducks/getDataSlice";

// export function* handelGetData(action) {
//   try {
//     const response = yield call(requestGetData);
//     console.log(response);
//     const { data } = response;
//     yield put(set_data({ ...data }));
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* handelGetData(action) {
  try {
    // console.log(action);
    const getData = yield call(requestGetData);
    const { data } = getData;
    // console.log(data);
    yield put(set_data({ ...data }));
  } catch (error) {
    console.error(error);
  }
}
