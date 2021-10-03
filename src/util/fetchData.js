import axios from "axios";
const fetchData = async (location = null, aqi = "no") => {
  const API = process.env.REACT_APP_API_URL;
  const KEY = process.env.REACT_APP_KEY;
  let response = await axios.get(`${API}?key=${KEY}&q=${location}&aqi=${aqi}`);

  return response.data;
};

export default fetchData;
