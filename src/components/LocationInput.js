import { FormControl, InputAdornment, TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button, Container } from "@material-ui/core";
import { connect } from "react-redux";
import { weatherReportStart } from "../redux/root/WeatherReport";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const LocationInput = (props) => {
  const [location, setLocation] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.locationWeatherStart({ location });
  };
  return (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <FormControl variant="outlined">
        <TextField
          id="input-with-icon-adornment"
          label="Location"
          style={{ margin: "5px" }}
          value={location}
          onChange={onChangeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocationOnOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </FormControl>
      <Button
        size="small"
        style={{ margin: "5px" }}
        component="span"
        variant="contained"
        color="primary"
        endIcon={<SearchIcon />}
        onClick={onSubmitHandler}
      >
        Go
      </Button>
    </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(LocationInput);
