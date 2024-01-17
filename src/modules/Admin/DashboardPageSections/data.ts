/* eslint-disable no-magic-numbers */

export const monthLabels = ["November", "December", "January", "February", "March", "April"];
export const numberOfClaimRequestPerMonth = [12, 19, 3, 5, 2, 3];
export const numberOfClaimRequestHandledPerMonth = [8, 12, 10, 5, 1, 4];

export const lineChartData = {
  labels: monthLabels,
  datasets: [
    {
      label: "Life",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: ["rgba(255, 99, 132, 0.8)"],
      borderWidth: 4,
    },
    {
      label: "Medical",
      data: [2, 3, 20, 5, 1, 4],
      borderColor: ["rgba(54, 162, 235, 0.8)"],
      borderWidth: 4,
    },
    {
      label: "Car",
      data: [3, 10, 13, 15, 22, 30],
      borderColor: ["rgba(255, 206, 86, 0.8)"],
      borderWidth: 4,
    },
    {
      label: "House",
      data: [5, 3, 8, 22, 15, 30],
      borderColor: ["rgba(75, 192, 192, 0.8)"],
      borderWidth: 4,
    },
  ],
};

export const barChartData = {
  labels: monthLabels,
  datasets: [
    {
      label: "Claim Requests",
      data: numberOfClaimRequestPerMonth,
      backgroundColor: ["rgba(255, 99, 132, 0.8)"],
      borderWidth: 0,
      borderRadius: 6,
    },
    {
      label: "Claim Requests Handled",
      data: numberOfClaimRequestHandledPerMonth,
      backgroundColor: ["rgba(54, 162, 235, 0.8)"],
      borderWidth: 0,
      borderRadius: 6,
    },
  ],
};

export const doughnutChartData = {
  labels: ["On-Time", "Late"],
  datasets: [
    {
      label: "On-Time and Late Payments Rates",
      data: [80, 20],
      backgroundColor: ["rgba(54, 162, 235, 0.8)", "rgba(255, 99, 132, 0.8)"],
      borderWidth: 0,
    },
  ],
};
