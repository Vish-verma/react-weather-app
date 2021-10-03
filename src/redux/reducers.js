import { combineReducers } from "redux";
import weatherReportReducer from "./root/WeatherReport";
export default combineReducers({
  weatherData: weatherReportReducer,
});
