import { Box, Typography } from "@mui/material";
import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  let gdp = null
  if (active && payload && payload.length) {
    gdp = payload[0].value;
  }
  return (
    <Box
      sx={{
        backgroundColor: "#555",
        padding: "10px",
        borderRadius: "5px",
        color: "#fff",
        boxShadow: 3,
      }}
    >
      <Typography variant="body2">India ({label})</Typography>
      <Typography variant="body2">{gdp}</Typography>
      <Typography variant="body2">Trillion</Typography>
    </Box>
  );
};

export default CustomTooltip;
