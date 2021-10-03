import { put, call, takeLatest } from "redux-saga/effects";
import fetchData from "../../util/fetchData";
// import Api from "...";

// ========================================== Action Type =====================================================
export const actionType = {
  WEATHER_REPORT_START: "WEATHER_REPORT_START",
  WEATHER_REPORT_SUCCESS: "WEATHER_REPORT_SUCCESS",
  WEATHER_REPORT_FAILED: "WEATHER_REPORT_FAILED",
};

// ============================================ Actions ========================================================
export const weatherReportStart = (data) => ({
  type: actionType.WEATHER_REPORT_START,
  payload: data,
});

export const weatherReportSuccess = (data) => ({
  type: actionType.WEATHER_REPORT_SUCCESS,
  payload: data,
});

export const weatherReportFailed = (data) => ({
  type: actionType.WEATHER_REPORT_FAILED,
  payload: data,
});

// =========================================== Reducer ===========================================================
const INIT_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default function weatherReportReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionType.WEATHER_REPORT_START:
      return {
        ...state,
        loading: true,
      };
    case actionType.WEATHER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case actionType.WEATHER_REPORT_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchWeatherReport(action) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const weather = yield call(
      fetchData,
      action.payload.location,
      action.payload.aqi
    );
    yield put(weatherReportSuccess(weather));
  } catch (e) {
    console.log("ERROR", e.message);
    yield put(weatherReportFailed(e.message));
  }
}

export function* watchSaga() {
  yield takeLatest(actionType.WEATHER_REPORT_START, fetchWeatherReport);
}
