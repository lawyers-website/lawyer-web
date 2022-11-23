import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MyChart2() {
  const display = useColorModeValue(true, false);
  const width = useBreakpointValue({ base: "100%", md: "80%", lg: "80%" });
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users Gained",
        data: [23, 40, 54, 12, 35, 30, 60, 45, 50, 38, 32, 40],
        backgroundColor: "#742774",
        lineTension: 0.3,
        borderColor: "#742774",
        borderWidth: 2,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: display,
        },
      },
      y: {
        grid: {
          display: display,
        },
      },
    },
  };

  return (
    <Box width={width}>
      <Line data={data} options={options} />
    </Box>
  );
}
