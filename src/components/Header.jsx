import { Box, Typography, Link } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h4" gutterBottom>
        GDP of India over the years
      </Typography>
      <Typography variant="body2" color="info">
        <Link
          underline="none"
          href="https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2023&locations=IN&start=1960&view=chart"
        >
          Source: World Bank
        </Link>
      </Typography>
    </Box>
  );
};

export default Header;
