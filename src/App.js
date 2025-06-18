import { useState, useEffect } from "react";
import { Box, CircularProgress, Container, Card } from "@mui/material";
import Header from "./components/Header";
import GDPCharts from "./components/GDPCharts";
import { fetchIndiaGDP } from "./services/api";

function App() {
  const [gdpData, setGdpData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchIndiaGDP();
      setGdpData(data);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        raised="true"
        sx={{
          padding: "10px",
          paddingBottom: "30px",
          paddingRight: "30px",
          minWidth: 800,
        }}
      >
        <Header></Header>
        {loading ? (
          <Box display="flex" justifyContent="center" my={5}>
            <CircularProgress></CircularProgress>
          </Box>
        ) : (
          <GDPCharts data={gdpData}></GDPCharts>
        )}
      </Card>
    </Container>
  );
}

export default App;
