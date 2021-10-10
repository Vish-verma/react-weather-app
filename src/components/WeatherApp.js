import { Backdrop, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { weatherReportStart } from "../redux/root/WeatherReport";
import LocationInput from "./LocationInput";
import WeatherData from "./WeatherData";

const WeatherApp = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(props.weatherReport.loading);
  }, [props.weatherReport]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocationInput />
      </div>
      <br />
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <WeatherData />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    weatherReport: state.weatherData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    locationWeatherStart: (data) => dispatch(weatherReportStart(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
