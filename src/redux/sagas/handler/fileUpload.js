import { call } from "redux-saga/effects";
// import { set_file } from "../../ducks/fileUploadSlice";
import { postFileUpload } from "../api/fileUpload";

export function* handelPostFile(action) {
  try {
    console.log(action);
    yield call(postFileUpload, action);
    // const getData = yield call(postFileUpload);
    // const { data } = getData;
    // console.log(data);
    // yield put(set_data({ ...data }));
  } catch (error) {
    console.error(error);
  }
}
