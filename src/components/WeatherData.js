import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { weatherReportStart } from "../redux/root/WeatherReport";

const WeatherData = (props) => {
  const [weatherReport, setWeatherReport] = useState({});
  useEffect(() => {
    if (props.weatherReport.data) {
      setWeatherReport(props.weatherReport.data);
    }
  }, [props.weatherReport]);
  if (!weatherReport.current) {
    return "";
  }
  return (
    <div
      className="glassmorph"
      style={{ margin: "5px", padding: "5px", width: "50%" }}
    >
      <h3>
        <b>Weather Report</b>
      </h3>
      <hr style={{ width: "90%", border: "1px solid black" }} />
      {weatherReport.current && (
        <img src={weatherReport.current.condition.icon} alt="weather" />
      )}
      <div className="displayStyle">
        {weatherReport.location && (
          <>
            <div>
              <span>
                <b>Name : </b> {weatherReport.location.name}
              </span>
            </div>
            <div>
              <span>
                <b>Region : </b>
                {weatherReport.location.region}
              </span>
            </div>
            <div>
              <span>
                {" "}
                <b>Country : </b>
                {weatherReport.location.country}
              </span>
            </div>
            <div>
              <span>
                <b>Time : </b>
                {weatherReport.location.localtime}
              </span>
            </div>
          </>
        )}
      </div>

      {weatherReport.current && (
        <div className="displayStyle">
          <br />

          <div>
            <div>
              <span>
                <b>temp_c : </b> {weatherReport.current.temp_c}
              </span>
            </div>
            <div>
              <span>
                <b>temp_f : </b>
                {weatherReport.current.temp_f}
              </span>
            </div>
            <div>
              <span>
                {" "}
                <b>condition : </b>
                {weatherReport.current.condition.text}{" "}
              </span>
            </div>

            <div>
              <span>
                <b>wind_mph : </b>
                {weatherReport.current.wind_mph}
              </span>
            </div>
            <div>
              <span>
                <b>humidity :</b>
                {weatherReport.current.humidity}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
