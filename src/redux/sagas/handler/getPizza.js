import { call, put } from "redux-saga/effects";
import { set_pizza } from "../../ducks/getPizzaSlice";
import { requestPizza } from "../api/getPizza";

export function* handelGetPizza(action) {
  try {
    const response = yield call(requestPizza);
    const { data } = response;
    yield put(set_pizza({ ...data }));
  } catch (error) {
    console.error(error);
  }
}
