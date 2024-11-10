import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
);

export default function Analytics() {
  const [data, setData] = useState([]);
  const [trends, setTrends] = useState('');
  const [incomeData, setIncomeData] = useState(null);
  const [creditScoreData, setCreditScoreData] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [stocksData, setStocksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/customer-data');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
        analyzeTrends(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const analyzeTrends = (data) => {
    let analysisText = '';
    const avgIncome =
      data.reduce((sum, customer) => sum + customer.income, 0) / data.length;
    analysisText += `The average income of customers is $${avgIncome.toFixed(2)}. `;

    const cities = data.reduce((acc, customer) => {
      acc[customer.city] = (acc[customer.city] || 0) + 1;
      return acc;
    }, {});
    const sortedCities = Object.entries(cities)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3); // Show top 3 cities
    const popularCity = sortedCities
      .map(([city, count]) => `${city}: ${count}`)
      .join(', ');
    analysisText += `Top 3 cities by customer count: ${popularCity}. `;

    const avgCreditScore =
      data.reduce((sum, customer) => sum + customer.credit, 0) / data.length;
    analysisText += `The average credit score is ${avgCreditScore.toFixed(2)}. `;

    const stocks = data.flatMap((customer) => customer.stocks);
    const stocksCount = stocks.reduce((acc, stock) => {
      acc[stock] = (acc[stock] || 0) + 1;
      return acc;
    }, {});
    const sortedStocks = Object.entries(stocksCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3); // Show top 3 stocks
    setStocksData(sortedStocks.map(([stock, count]) => ({ stock, count })));

    setCityData(sortedCities);
    setIncomeData({
      labels: data.map((_, index) => `Customer ${index + 1}`),
      datasets: [
        {
          label: 'Income',
          data: data.map((customer) => customer.income),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderRadius: 8,
          borderWidth: 1,
        },
      ],
    });
    setCreditScoreData({
      labels: data.map((_, index) => `Customer ${index + 1}`),
      datasets: [
        {
          label: 'Credit Score',
          data: data.map((customer) => customer.credit),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderRadius: 8,
          borderWidth: 1,
        },
      ],
    });

    setTrends(analysisText);
  };

  const creditScoreInsight = () => {
    if (!creditScoreData) return '';
    const scores = creditScoreData.datasets[0].data;
    const avgScore =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;
    if (avgScore > 700) {
      return 'The average credit score is relatively high, indicating a financially stable customer base.';
    } else if (avgScore > 600) {
      return 'The average credit score suggests that the customer base is somewhat financially stable, with room for improvement.';
    } else {
      return 'The average credit score is low, suggesting that customers might benefit from credit counseling or financial planning services.';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-black text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Customer Data Analysis
      </h1>

      {/* Trend Analysis Section */}
      <div className="text-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Key Insights</h2>
        <p>{trends || 'Loading analysis...'}</p>
      </div>

      {/* Income Chart */}
      {incomeData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Income Distribution
          </h2>
          <div className="h-80">
            <Bar
              data={incomeData}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Income Distribution Across Customers',
                  },
                  tooltip: { mode: 'index', intersect: false },
                },
                scales: {
                  y: { beginAtZero: true, ticks: { stepSize: 1000 } },
                  x: { ticks: { autoSkip: true, maxRotation: 45 } },
                },
              }}
            />
          </div>
        </div>
      )}

      {/* Credit Score Chart with Insight */}
      {creditScoreData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Credit Score Distribution
          </h2>
          <div className="h-80">
            <Bar
              data={creditScoreData}
              options={{
                responsive: true,
                plugins: {
                  title: { display: true, text: 'Credit Score Distribution' },
                  tooltip: { mode: 'index', intersect: false },
                },
                scales: {
                  y: { beginAtZero: true, ticks: { stepSize: 50 } },
                  x: { ticks: { autoSkip: true, maxRotation: 45 } },
                },
              }}
            />
          </div>
          <div className="mt-4 text-gray-200">{creditScoreInsight()}</div>
        </div>
      )}

      {/* Top 3 Stocks Owned (Doughnut Chart) */}
      {stocksData.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Top 3 Stocks Owned
          </h2>
          <div className="h-80">
            <Doughnut
              data={{
                labels: stocksData.map((stock) => stock.stock),
                datasets: [
                  {
                    label: 'Stock Ownership Distribution',
                    data: stocksData.map((stock) => stock.count),
                    backgroundColor: ['#FF5733', '#FF8C00', '#FFD700'],
                    borderColor: ['#FF5733', '#FF8C00', '#FFD700'],
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  title: { display: true, text: 'Top 3 Stocks Owned' },
                  tooltip: { mode: 'index', intersect: false },
                },
              }}
            />
          </div>
        </div>
      )}

      {/* Top 3 Cities (Horizontal Stacked Bar Chart) */}
      {cityData.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Top 3 Cities
          </h2>
          <div className="h-80">
            <Pie
              data={{
                labels: cityData.map(([city]) => city),
                datasets: [
                  {
                    label: 'City Distribution',
                    data: cityData.map(([, count]) => count),
                    backgroundColor: ['#4CAF50', '#2196F3', '#9C27B0'],
                    borderColor: ['#4CAF50', '#2196F3', '#9C27B0'],
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Top 3 Cities by Customer Count',
                  },
                  tooltip: { mode: 'index', intersect: false },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
