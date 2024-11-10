import React, { useEffect, useState } from 'react';
import { Scatter, Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/customer-data')
      .then((response) => response.json())
      .then((data) => setCustomerData(data));
  }, []);

  // 1. Income vs. Credit Score Scatter with Density Heatmap
  const incomeCreditData = {
    datasets: [
      {
        label: 'Income vs. Credit Score',
        data: customerData.map((item) => ({
          x: item.credit_score,
          y: item.annual_income,
        })),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
    ],
  };

  // 2. Income Distribution by Experience Level (Stacked Bar Chart)
  const experienceGroups = customerData.reduce((acc, item) => {
    acc[item.experience] = (acc[item.experience] || []).concat(
      item.annual_income,
    );
    return acc;
  }, {});
  const avgIncomeByExperience = Object.entries(experienceGroups).map(
    ([experience, incomes]) => ({
      experience,
      avgIncome:
        incomes.reduce((sum, income) => sum + income, 0) / incomes.length,
    }),
  );
  const incomeExperienceData = {
    labels: avgIncomeByExperience.map((item) => item.experience),
    datasets: [
      {
        label: 'Average Income by Experience',
        data: avgIncomeByExperience.map((item) => item.avgIncome),
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
      },
    ],
  };

  // 3. Feedback Sentiment Donut Chart
  const feedbackSentiment = customerData.reduce(
    (acc, item) => {
      const isPositive =
        item.feedback.toLowerCase().includes('helpful') ||
        item.feedback.toLowerCase().includes('positive');
      isPositive ? acc.positive++ : acc.negative++;
      return acc;
    },
    { positive: 0, negative: 0 },
  );
  const feedbackData = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        label: 'Feedback Sentiment',
        data: [feedbackSentiment.positive, feedbackSentiment.negative],
        backgroundColor: ['rgba(75, 192, 192, 0.7)', 'rgba(255, 99, 132, 0.7)'],
      },
    ],
  };

  // 4. Churn Likelihood by Experience (Experience Survival Curve)
  const survivalData = {
    labels: Array.from({ length: 10 }, (_, i) => `Year ${i + 1}`),
    datasets: [
      {
        label: 'Low Experience',
        data: [100, 90, 80, 75, 60, 55, 50, 45, 40, 30],
        borderColor: 'rgba(255, 99, 132, 0.7)',
        fill: false,
      },
      {
        label: 'Medium Experience',
        data: [100, 95, 85, 80, 70, 65, 60, 55, 50, 45],
        borderColor: 'rgba(54, 162, 235, 0.7)',
        fill: false,
      },
      {
        label: 'High Experience',
        data: [100, 98, 92, 90, 85, 80, 75, 70, 65, 60],
        borderColor: 'rgba(75, 192, 192, 0.7)',
        fill: false,
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Income vs. Credit Score</h2>
        <Scatter
          data={incomeCreditData}
          options={{
            scales: {
              x: { title: { text: 'Credit Score', display: true } },
              y: { title: { text: 'Annual Income', display: true } },
            },
          }}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          Income Distribution by Experience
        </h2>
        <Bar
          data={incomeExperienceData}
          options={{
            plugins: { legend: { display: true } },
            scales: { y: { beginAtZero: true } },
          }}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Feedback Sentiment</h2>
        <Doughnut
          data={feedbackData}
          options={{
            plugins: { legend: { display: true, position: 'right' } },
          }}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          Churn Likelihood by Experience
        </h2>
        <Line
          data={survivalData}
          options={{
            plugins: { legend: { display: true } },
            scales: { y: { beginAtZero: true } },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;

// src/components/Analytics.js

// import React, { useEffect, useState } from 'react';
// import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';

// // Register the necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const Analytics = () => {
//   const [chartData, setChartData] = useState({
//     lineChartData: {
//       labels: ['January', 'February', 'March', 'April', 'May'],
//       datasets: [
//         {
//           label: 'Sales Data',
//           data: [65, 59, 80, 81, 56],
//           borderColor: 'rgba(75,192,192,1)',
//           fill: false,
//         },
//       ],
//     },
//     barChartData: {
//       labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//       datasets: [
//         {
//           label: 'Revenue',
//           data: [300, 400, 500, 700],
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     radarChartData: {
//       labels: ['A', 'B', 'C', 'D', 'E'],
//       datasets: [
//         {
//           label: 'Product Performance',
//           data: [65, 59, 90, 81, 56],
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     doughnutChartData: {
//       labels: ['Red', 'Blue', 'Yellow'],
//       datasets: [
//         {
//           label: 'User Feedback',
//           data: [30, 40, 30],
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   });

//   useEffect(() => {
//     // You can fetch your data from an API here and update the chartData state
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Line Chart</h2>
//         <Line data={chartData.lineChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Bar Chart</h2>
//         <Bar data={chartData.barChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Radar Chart</h2>
//         <Radar data={chartData.radarChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Doughnut Chart</h2>
//         <Doughnut data={chartData.doughnutChartData} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useEffect, useState } from 'react';
// import { Line, Bar, Radar, Doughnut, Pie, Scatter, PolarArea } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler,
// } from 'chart.js';

// // Register the necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler
// );

// const Analytics = () => {
//   const [chartData, setChartData] = useState({
//     lineChartData: { labels: [], datasets: [] },
//     barChartData: { labels: [], datasets: [] },
//     radarChartData: { labels: [], datasets: [] },
//     doughnutChartData: { labels: [], datasets: [] },
//     pieChartData: { labels: [], datasets: [] },
//     scatterChartData: { datasets: [] },
//     polarAreaChartData: { labels: [], datasets: [] },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/api/customer-data');
//         const data = await response.json();

//         // Preparing chart data for each chart component
//         const lineChartData = {
//           labels: data.map((item) => item.first_name),
//           datasets: [
//             {
//               label: 'Annual Income',
//               data: data.map((item) => item.annual_income),
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//               fill: true,
//             },
//           ],
//         };

//         const barChartData = {
//           labels: data.map((item) => item.city),
//           datasets: [
//             {
//               label: 'Income by City',
//               data: data.map((item) => item.annual_income),
//               backgroundColor: 'rgba(255, 99, 132, 0.2)',
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         const radarChartData = {
//           labels: ['Income', 'Credit Score', 'Experience'],
//           datasets: [
//             {
//               label: 'Customer Data',
//               data: [
//                 data.reduce((sum, item) => sum + item.annual_income, 0) / data.length,
//                 data.reduce((sum, item) => sum + item.credit_score, 0) / data.length,
//                 data.reduce((sum, item) => sum + item.experience, 0) / data.length,
//               ],
//               backgroundColor: 'rgba(54, 162, 235, 0.2)',
//               borderColor: 'rgba(54, 162, 235, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         const doughnutChartData = {
//           labels: ['Positive Feedback', 'Neutral Feedback', 'Negative Feedback'],
//           datasets: [
//             {
//               label: 'Feedback Distribution',
//               data: [
//                 data.filter((item) => item.feedback === 'positive').length,
//                 data.filter((item) => item.feedback === 'neutral').length,
//                 data.filter((item) => item.feedback === 'negative').length,
//               ],
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//               hoverOffset: 4,
//             },
//           ],
//         };

//         const pieChartData = {
//           labels: ['High Income', 'Medium Income', 'Low Income'],
//           datasets: [
//             {
//               label: 'Income Distribution',
//               data: [
//                 data.filter((item) => item.annual_income > 70000).length,
//                 data.filter((item) => item.annual_income <= 70000 && item.annual_income > 30000).length,
//                 data.filter((item) => item.annual_income <= 30000).length,
//               ],
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//           ],
//         };

//         const scatterChartData = {
//           datasets: [
//             {
//               label: 'Experience vs Credit Score',
//               data: data.map((item) => ({ x: item.experience, y: item.credit_score })),
//               backgroundColor: 'rgba(75,192,192,1)',
//             },
//           ],
//         };

//         const polarAreaChartData = {
//           labels: ['Low Income', 'Medium Income', 'High Income'],
//           datasets: [
//             {
//               label: 'Income Polar Chart',
//               data: [
//                 data.filter((item) => item.annual_income <= 30000).length,
//                 data.filter((item) => item.annual_income <= 70000 && item.annual_income > 30000).length,
//                 data.filter((item) => item.annual_income > 70000).length,
//               ],
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//           ],
//         };

//         // Update chart data state
//         setChartData({
//           lineChartData,
//           barChartData,
//           radarChartData,
//           doughnutChartData,
//           pieChartData,
//           scatterChartData,
//           polarAreaChartData,
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Sales Data Over Time (Line Chart)</h2>
//         <Line data={chartData.lineChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Quarterly Revenue (Bar Chart)</h2>
//         <Bar data={chartData.barChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Data Overview (Radar Chart)</h2>
//         <Radar data={chartData.radarChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Feedback Distribution (Doughnut Chart)</h2>
//         <Doughnut data={chartData.doughnutChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Income Distribution (Pie Chart)</h2>
//         <Pie data={chartData.pieChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Experience vs Credit Score (Scatter Plot)</h2>
//         <Scatter data={chartData.scatterChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Income Polar Chart (Polar Area)</h2>
//         <PolarArea data={chartData.polarAreaChartData} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useEffect, useState } from 'react';
// import { Line, Bar, Radar, Doughnut, Pie, Scatter, PolarArea } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler,
// } from 'chart.js';

// // Register the necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   Filler
// );

// const Analytics = () => {
//   const [chartData, setChartData] = useState({
//     lineChartData: { labels: [], datasets: [] },
//     barChartData: { labels: [], datasets: [] },
//     radarChartData: { labels: [], datasets: [] },
//     doughnutChartData: { labels: [], datasets: [] },
//     pieChartData: { labels: [], datasets: [] },
//     scatterChartData: { datasets: [] },
//     polarAreaChartData: { labels: [], datasets: [] },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/api/customer-data');
//         const data = await response.json();

//         // Simulated realistic data preparation for each chart
//         const lineChartData = {
//           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//           datasets: [
//             {
//               label: 'Monthly Sales',
//               data: [1200, 1400, 1600, 1800, 1500, 2000, 2100, 2200, 1900, 1700, 1800, 2100],
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//               fill: true,
//             },
//           ],
//         };

//         const barChartData = {
//           labels: ['North', 'South', 'East', 'West'],
//           datasets: [
//             {
//               label: 'Revenue by Region',
//               data: [5000, 4000, 4500, 4700],
//               backgroundColor: 'rgba(255, 99, 132, 0.2)',
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         const radarChartData = {
//           labels: ['Age', 'Income', 'Education Level', 'Job Satisfaction', 'Experience'],
//           datasets: [
//             {
//               label: 'Customer Demographics',
//               data: [35, 55000, 4, 3, 7], // Average age, income, education (1-5 scale), satisfaction (1-5 scale), years of experience
//               backgroundColor: 'rgba(54, 162, 235, 0.2)',
//               borderColor: 'rgba(54, 162, 235, 1)',
//               borderWidth: 1,
//             },
//           ],
//         };

//         const doughnutChartData = {
//           labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
//           datasets: [
//             {
//               label: 'Customer Feedback',
//               data: [40, 30, 20, 10],
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733'],
//               hoverOffset: 4,
//             },
//           ],
//         };

//         const pieChartData = {
//           labels: ['Low Income (<$30k)', 'Medium Income ($30k-$70k)', 'High Income (>$70k)'],
//           datasets: [
//             {
//               label: 'Income Distribution',
//               data: [25, 45, 30], // Realistic spread of income groups
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//           ],
//         };

//         const scatterChartData = {
//           datasets: [
//             {
//               label: 'Age vs Income',
//               data: [
//                 { x: 25, y: 25000 },
//                 { x: 30, y: 35000 },
//                 { x: 40, y: 45000 },
//                 { x: 45, y: 55000 },
//                 { x: 50, y: 65000 },
//                 { x: 60, y: 75000 },
//                 { x: 35, y: 40000 },
//                 { x: 28, y: 30000 },
//               ],
//               backgroundColor: 'rgba(75,192,192,1)',
//             },
//           ],
//         };

//         const polarAreaChartData = {
//           labels: ['Low Income', 'Middle Income', 'High Income'],
//           datasets: [
//             {
//               label: 'Income by Range',
//               data: [100, 250, 150], // Distribution of income ranges
//               backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//           ],
//         };

//         // Update chart data state
//         setChartData({
//           lineChartData,
//           barChartData,
//           radarChartData,
//           doughnutChartData,
//           pieChartData,
//           scatterChartData,
//           polarAreaChartData,
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Monthly Sales (Line Chart)</h2>
//         <Line data={chartData.lineChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Revenue by Region (Bar Chart)</h2>
//         <Bar data={chartData.barChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Demographics (Radar Chart)</h2>
//         <Radar data={chartData.radarChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Feedback (Doughnut Chart)</h2>
//         <Doughnut data={chartData.doughnutChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Income Distribution (Pie Chart)</h2>
//         <Pie data={chartData.pieChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Age vs Income (Scatter Plot)</h2>
//         <Scatter data={chartData.scatterChartData} />
//       </div>

//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Income by Range (Polar Area)</h2>
//         <PolarArea data={chartData.polarAreaChartData} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useEffect, useState } from 'react';
// import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';

// // Register the necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   RadialLinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const Analytics = () => {
//   const [chartData, setChartData] = useState({
//     lineChartData: {
//       labels: ['January', 'February', 'March', 'April', 'May'],
//       datasets: [
//         {
//           label: 'Sales Data',
//           data: [100, 200, 150, 175, 250], // Simulating sales trends
//           borderColor: 'rgba(75,192,192,1)',
//           fill: false,
//         },
//       ],
//     },
//     barChartData: {
//       labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//       datasets: [
//         {
//           label: 'Revenue',
//           data: [500, 700, 600, 900], // Simulated quarterly revenue
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     radarChartData: {
//       labels: ['Product A', 'Product B', 'Product C', 'Product D'],
//       datasets: [
//         {
//           label: 'Product Performance',
//           data: [80, 70, 90, 85], // Simulated product performance scores
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     doughnutChartData: {
//       labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
//       datasets: [
//         {
//           label: 'Customer Feedback',
//           data: [40, 30, 20, 10], // Simulating customer feedback data
//           backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#FF5733'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//     ageChartData: {
//       labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
//       datasets: [
//         {
//           label: 'Customer Age Distribution',
//           data: [25, 35, 20, 15, 5], // Simulated age group distribution
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#4CAF50'],
//         },
//       ],
//     },
//     incomeChartData: {
//       labels: ['20k-50k', '50k-100k', '100k+'],
//       datasets: [
//         {
//           label: 'Income Distribution',
//           data: [40, 35, 25], // Simulated income group distribution
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         },
//       ],
//     },
//   });

//   useEffect(() => {
//     // This is where you'd fetch data from an API in a real-world scenario
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       {/* Line Chart */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Sales Trend (January to May)</h2>
//         <Line data={chartData.lineChartData} />
//       </div>

//       {/* Bar Chart */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Quarterly Revenue</h2>
//         <Bar data={chartData.barChartData} />
//       </div>

//       {/* Radar Chart */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Product Performance</h2>
//         <Radar data={chartData.radarChartData} />
//       </div>

//       {/* Doughnut Chart (Customer Feedback) */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Feedback Sentiment</h2>
//         <Doughnut data={chartData.doughnutChartData} />
//       </div>

//       {/* Age Distribution (Bar Chart) */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Age Distribution</h2>
//         <Bar data={chartData.ageChartData} />
//       </div>

//       {/* Income Distribution (Doughnut Chart) */}
//       <div className="border rounded-lg p-4">
//         <h2 className="text-xl font-semibold">Customer Income Distribution</h2>
//         <Doughnut data={chartData.incomeChartData} />
//       </div>
//     </div>
//   );
// };

// export default Analytics;
