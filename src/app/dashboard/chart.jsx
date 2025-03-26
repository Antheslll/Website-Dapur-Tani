"use client";
import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { inventoryData } from "../GlobalComponent/Data/ProductData/inventoryData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const InventoryChart = () => {
  const chartRef = useRef(null);

  const categoryTotals = inventoryData.reduce((acc, item) => {
    acc[item.materialCategory] = (acc[item.materialCategory] || 0) + item.qty;
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const dataValues = Object.values(categoryTotals);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Quantity",
        data: dataValues,
        backgroundColor: ["#8979FF", "#FF928A", "#3CC3DF"],
        barThickness: 25,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: { stacked: false, categoryPercentage: 0.5 },
      y: { beginAtZero: true },
    },
    onClick: (event) => {
      if (!chartRef.current) return;
      const chart = chartRef.current;
      console.log("Chart clicked!", chart);
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default InventoryChart;

const OrderTypeChart = () => {
  const PieRef = useRef(null);

  const data = {
    labels: ["Auto", "Wholesale", "Instant"],
    datasets: [
      {
        data: [2, 3, 4], // Disesuaikan dengan jumlah aktual dari tiap tipe
        backgroundColor: ["#8979FF", "#FF928A", "#3CC3DF"],
        hoverBackgroundColor: ["#614CFF", "#FF6155", "#139CB7"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 15, borderRadius: 105 },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Pie ref={PieRef} data={data} options={options} />;
};

export { OrderTypeChart };

const ExpenditureChart = () => {
  const LineRef = useRef(null);

  const monthlyExpenditure = {
    January: { auto: 1700000, wholesale: 1300000, instant: 2500000 },
    February: { auto: 2200000, wholesale: 1800000, instant: 3200000 },
    March: { auto: 2700000, wholesale: 2100000, instant: 4000000 },
  };

  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "All",
        data: Object.values(monthlyExpenditure).map(
          (month) => month.auto + month.wholesale + month.instant
        ),
        borderColor: "#FF0000",
        backgroundColor: "#FF0000",
      },
      {
        label: "Auto",
        data: Object.values(monthlyExpenditure).map((month) => month.auto),
        borderColor: "#8979FF",
        backgroundColor: "#8979FF",
      },
      {
        label: "Wholesale",
        data: Object.values(monthlyExpenditure).map((month) => month.wholesale),
        borderColor: "#FF928A",
        backgroundColor: "#FF928A",
      },
      {
        label: "Instant",
        data: Object.values(monthlyExpenditure).map((month) => month.instant),
        borderColor: "#3CC3DF",
        backgroundColor: "#3CC3DF",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        offset: true,
        ticks: { font: { size: 10 } },
      },
      y: { beginAtZero: true, ticks: { font: { size: 10 } } },
    },
  };

  return <Line ref={LineRef} data={data} options={options} />;
};

export { ExpenditureChart };

const InventoryOverviewChart = () => {
  const LineRef = useRef(null);

  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Vegetable",
        data: [500, 400, 600],
        borderColor: "#8979FF",
        backgroundColor: "#8979FF",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        offset: true,
        ticks: { font: { size: 10 } },
      },
      y: { beginAtZero: true, ticks: { font: { size: 10 } } },
    },
  };

  return <Line ref={LineRef} data={data} options={options} />;
};

export { InventoryOverviewChart };

const ExpenditureOverviewChart = () => {
  const LineRef = useRef(null);

  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "All",
        data: [1400, 1100, 1250],
        borderColor: "#FF0000",
        backgroundColor: "#FF0000",
      },
      {
        label: "Vegetable",
        data: [500, 400, 600],
        borderColor: "#8979FF",
        backgroundColor: "#8979FF",
      },
      {
        label: "Fruit",
        data: [600, 500, 550],
        borderColor: "#FF928A",
        backgroundColor: "#FF928A",
      },
      {
        label: "Meat",
        data: [300, 200, 100],
        borderColor: "#3CC3DF",
        backgroundColor: "#3CC3DF",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        offset: true,
        ticks: { font: { size: 10 } },
      },
      y: { beginAtZero: true, ticks: { font: { size: 10 } } },
    },
  };

  return <Line ref={LineRef} data={data} options={options} />;
};

export { ExpenditureOverviewChart };

const ExpenditureAnalysisChart = () => {
  const DoughnutRef = useRef(null);

  const orderHistory = [
    { type: "instant", amount: 1850000 },
    { type: "auto", amount: 900000 },
    { type: "wholesale", amount: 750000 },
    { type: "instant", amount: 4000000 },
    { type: "auto", amount: 2200000 },
    { type: "wholesale", amount: 2100000 },
    { type: "instant", amount: 2200000 },
    { type: "auto", amount: 4500000 },
    { type: "wholesale", amount: 2800000 },
  ];

  const expenditure = orderHistory.reduce((acc, order) => {
    acc[order.type] = (acc[order.type] || 0) + order.amount;
    return acc;
  }, {});

  const data = {
    labels: ["Auto", "Wholesale", "Instant"],
    datasets: [
      {
        data: [
          expenditure.auto || 0,
          expenditure.wholesale || 0,
          expenditure.instant || 0,
        ],
        backgroundColor: ["#8979FF", "#FF928A", "#3CC3DF"],
        hoverBackgroundColor: ["#614CFF", "#FF6155", "#139CB7"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 15, borderRadius: 105 },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut ref={DoughnutRef} data={data} options={options} />;
};

export { ExpenditureAnalysisChart };
