import { all } from "redux-saga/effects";
import { watchSaga } from "./root/WeatherReport";
export default function* rootSaga() {
  yield all([watchSaga()]);
}
