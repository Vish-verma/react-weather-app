import "./App.css";
import WeatherApp from "./components/WeatherApp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md" fixed>
      <Box
        // sx={{ height: "100vh" }}
        border={2}
        borderRadius={5}
        borderColor="grey"
        margin={5}
        padding={5}
        className="night glassmorph"
      >
        {/* <p>{url}</p> */}

        <WeatherApp />
      </Box>
    </Container>
  );
}

export default App;
