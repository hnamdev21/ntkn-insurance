"use client";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import Button from "@/components/Button";

import { barChartData, doughnutChartData, lineChartData } from "./data";

Chart.register(CategoryScale);
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = true;
Chart.defaults.resizeDelay = 200;

Chart.defaults.normalized = true;
Chart.defaults.layout.padding = 0;

const DashboardModule = () => {
  const [chartData, setChartData] = React.useState<string>("policy");

  return (
    <>
      <div className="flex items-center justify-center gap-[1.2rem]">
        <Button
          btnVariant={chartData === "policy" ? "primary" : "secondary"}
          onClick={() => setChartData("policy")}
        >
          Policy chart
        </Button>
        <Button
          btnVariant={chartData === "claim-request" ? "primary" : "secondary"}
          onClick={() => setChartData("claim-request")}
        >
          Claim request chart
        </Button>
        <Button
          btnVariant={chartData === "payment" ? "primary" : "secondary"}
          onClick={() => setChartData("payment")}
        >
          Payment chart
        </Button>
      </div>
      <div className="h-full flex items-center justify-center p-[12rem]">
        {chartData === "policy" && <Line data={lineChartData} style={{ maxHeight: "100%" }} />}
        {chartData === "claim-request" && <Bar data={barChartData} style={{ maxHeight: "100%" }} />}
        {chartData === "payment" && (
          <Doughnut data={doughnutChartData} style={{ maxHeight: "100%" }} />
        )}
      </div>
    </>
  );
};

export default DashboardModule;
