// import { Tooltip } from "@mui/material";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";

const GDPCharts = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="year"></XAxis>
        <YAxis></YAxis>
        <Tooltip content={<CustomTooltip></CustomTooltip>}></Tooltip>
        <Bar dataKey="value" fill="#2196f3" activeBar={true}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GDPCharts;
