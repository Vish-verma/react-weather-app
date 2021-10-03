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

  return (
    <>
      <div>
        {weatherReport.location && (
          <>
            <div>
              <span>Name : {weatherReport.location.name}</span>
            </div>
            <div>
              <span>Region :{weatherReport.location.region}</span>
            </div>
            <div>
              <span> Country :{weatherReport.location.country}</span>
            </div>
            <div>
              <span>Time :{weatherReport.location.localtime}</span>
            </div>
          </>
        )}
      </div>

      {weatherReport.current && (
        <div>
          <hr />
          <h4>Weather Report</h4>
          <br />
          <img src={weatherReport.current.condition.icon} alt="weather" />
          <div>
            <div>
              <span>temp_c : {weatherReport.current.temp_c}</span>
            </div>
            <div>
              <span>temp_f :{weatherReport.current.temp_f}</span>
            </div>
            <div>
              <span> condition :{weatherReport.current.condition.text} </span>
            </div>

            <div>
              <span>wind_mph :{weatherReport.current.wind_mph}</span>
            </div>
            <div>
              <span>humidity :{weatherReport.current.humidity}</span>
            </div>
          </div>
        </div>
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
