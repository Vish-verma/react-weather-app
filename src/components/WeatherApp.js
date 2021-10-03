import LocationInput from "./LocationInput";
import WeatherData from "./WeatherData";

const WeatherApp = () => {
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

      <div>
        <WeatherData />
      </div>
    </>
  );
};

export default WeatherApp;
