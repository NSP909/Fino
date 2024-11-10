import React, { useEffect, useState } from 'react';
import { Scatter, Bar, Doughnut, Line } from 'react-chartjs-2';
import { DollarSign, TrendingUp, Users, Star } from 'lucide-react';
import Sentiment from 'sentiment';
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
  // [Previous state and useEffect remain the same]
  const [customerData, setCustomerData] = useState([]);
  const [metrics, setMetrics] = useState({
    totalCustomers: 0,
    avgCreditScore: 0,
    totalInvestments: 0,
    avgExperience: 0,
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/customer-data')
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
        calculateMetrics(data);
      });
  }, []);

  const calculateMetrics = (data) => {
    const totalCustomers = data.length;
    const avgCreditScore =
      data.reduce((sum, user) => sum + user.credit, 0) / totalCustomers;
    const totalInvestments = data.reduce(
      (sum, user) => sum + user.purchases.length + user.stocks.length,
      0,
    );
    const avgExperience =
      data.reduce((sum, user) => sum + user.experience, 0) / totalCustomers;

    setMetrics({
      totalCustomers,
      avgCreditScore: avgCreditScore.toFixed(0),
      totalInvestments,
      avgExperience: avgExperience.toFixed(1),
    });
  };

  const StatCard = ({ title, value, icon: Icon }) => (
    <div className="bg-gray-800/50 backdrop-blur-lg p-2 rounded-lg border border-purple-500/20">
      <div className="flex justify-between items-center pt-5 pb-5">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-purple-200/70 text-lg font-medium ml-6">{title}</p>
          <h3 className="text-lg font-bold text-white ml-6">{value}</h3>
        </div>
        <div className="p-1 bg-purple-500/20 rounded-lg">
          <Icon className="w-8 h-8 text-purple-300" />
        </div>
      </div>
    </div>
  );

  // [Previous data processing functions remain the same]
  const processFeedbackSentiment = () => {
    const sentiment = new Sentiment();
    const sentiments = { Positive: 0, Neutral: 0, Negative: 0 };

    customerData.forEach((user) => {
      const combinedFeedback = `${user.comments} ${user.feedback}`;
      const score = sentiment.analyze(combinedFeedback).score;

      if (score > 0) sentiments.Positive++;
      else if (score < 0) sentiments.Negative++;
      else sentiments.Neutral++;
    });

    return sentiments;
  };

  const calculateInvestmentDistribution = () => {
    const investmentCounts = {};
    customerData.forEach((user) => {
      [...new Set([...user.purchases, ...user.stocks])].forEach(
        (investment) => {
          investmentCounts[investment] =
            (investmentCounts[investment] || 0) + 1;
        },
      );
    });

    return Object.entries(investmentCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);
  };

  const calculateExperienceLevels = () => {
    const expLevels = {
      Entry: 0,
      Mid: 0,
      Senior: 0,
      Expert: 0,
    };

    customerData.forEach((user) => {
      if (user.experience < 3) expLevels['Entry']++;
      else if (user.experience < 6) expLevels['Mid']++;
      else if (user.experience < 9) expLevels['Senior']++;
      else expLevels['Expert']++;
    });

    return expLevels;
  };

  const commonOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgb(216, 180, 254)',
          padding: 4,
          font: {
            size: 8,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: { size: 8 },
        bodyFont: { size: 8 },
        padding: 4,
        cornerRadius: 2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(216, 180, 254)',
          font: { size: 8 },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(216, 180, 254)',
          font: { size: 8 },
        },
      },
    },
  };

  // [Chart configurations remain the same]
  const incomeCreditData = {
    datasets: [
      {
        label: 'Income vs. Credit',
        data: customerData.map((user) => ({
          x: user.credit,
          y: user.income,
        })),
        backgroundColor: 'rgba(236, 72, 153, 0.6)',
        borderColor: 'rgba(236, 72, 153, 0.8)',
        borderWidth: 1,
        pointRadius: 2,
        pointHoverRadius: 3,
      },
    ],
  };

  const investmentDistributionData = {
    labels: calculateInvestmentDistribution().map(([stock]) => stock),
    datasets: [
      {
        label: 'Investments',
        data: calculateInvestmentDistribution().map(([, count]) => count),
        backgroundColor: [
          'rgba(236, 72, 153, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(99, 102, 241, 0.6)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const feedbackData = {
    labels: Object.keys(processFeedbackSentiment()),
    datasets: [
      {
        data: Object.values(processFeedbackSentiment()),
        backgroundColor: [
          'rgba(236, 72, 153, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(59, 130, 246, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  //popularInvestmentsData

  const popularInvestmentsData = {
    labels: calculateInvestmentDistribution().map(([stock]) => stock),
    datasets: [
      {
        label: 'Investments',
        data: calculateInvestmentDistribution().map(([, count]) => count),
        backgroundColor: [
          'rgba(236, 72, 153, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(99, 102, 241, 0.6)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const experienceData = {
    labels: Object.keys(calculateExperienceLevels()),
    datasets: [
      {
        label: 'Experience',
        data: Object.values(calculateExperienceLevels()),
        borderColor: 'rgba(236, 72, 153, 0.8)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 1,
        pointHoverRadius: 2,
      },
    ],
  };

  if (customerData.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="animate-pulse text-purple-200">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(236,72,153,0.15)_15%,rgb(14,0,36,0.5)_78%,transparent)]" />

        <div className="container mx-auto h-full p-6 relative flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">
              Dashboard Overview
            </h1>
            <p className="text-purple-200/70 mt-2">
              Real-time financial metrics and insights
            </p>
          </div>

          {/* Stats Cards - Increased height and better spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Customers"
              value={metrics.totalCustomers}
              icon={Users}
              className="min-h-[220px]" // Increased height
            />
            <StatCard
              title="Average Credit Score"
              value={metrics.avgCreditScore}
              icon={Star}
              className="min-h-[220px]"
            />
            <StatCard
              title="Total Investments"
              value={metrics.totalInvestments}
              icon={DollarSign}
              className="min-h-[220px]"
            />
            <StatCard
              title="Avg Experience Level"
              value={metrics.avgExperience}
              icon={TrendingUp}
              className="min-h-[220px]"
            />
          </div>

          {/* Main Charts Layout - Reduced height ratio */}
          <div className="flex-1 grid grid-rows-[55%_35%] gap-6">
            {/* Top Row - Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Income vs Credit Analysis */}
              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-purple-100">
                    Income vs Credit Analysis
                  </h2>
                </div>
                <div className="h-[calc(100%-4rem)]">
                  <Scatter
                    data={incomeCreditData}
                    options={{
                      ...commonOptions,
                      scales: {
                        x: {
                          ...commonOptions.scales.x,
                          ticks: {
                            ...commonOptions.scales.x.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                        y: {
                          ...commonOptions.scales.y,
                          ticks: {
                            ...commonOptions.scales.y.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>

              {/* Popular Investments */}
              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-purple-100">
                    Popular Investments
                  </h2>
                </div>
                <div className="h-[calc(100%-4rem)]">
                  <Bar
                    data={popularInvestmentsData}
                    options={{
                      ...commonOptions,
                      scales: {
                        x: {
                          ...commonOptions.scales.x,
                          ticks: {
                            ...commonOptions.scales.x.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                        y: {
                          ...commonOptions.scales.y,
                          ticks: {
                            ...commonOptions.scales.y.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row - Experience Distribution */}
            <div className="grid grid-cols-1">
              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-purple-100">
                    Experience Distribution
                  </h2>
                  <span className="text-pink-400 text-sm font-medium px-3 py-1 bg-pink-400/10 rounded-full">
                    By Level
                  </span>
                </div>
                <div className="h-[calc(100%-4rem)]">
                  <Line
                    data={experienceData}
                    options={{
                      ...commonOptions,
                      scales: {
                        x: {
                          ...commonOptions.scales.x,
                          ticks: {
                            ...commonOptions.scales.x.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                        y: {
                          ...commonOptions.scales.y,
                          ticks: {
                            ...commonOptions.scales.y.ticks,
                            font: { size: 14 }, // Increased font size
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartCard = ({ title, chart }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg p-2 rounded-lg border border-purple-500/20 h-full">
    <h2 className="text-xs font-semibold text-purple-100 mb-1">{title}</h2>
    <div className="h-[calc(100%-1.5rem)]">{chart}</div>
  </div>
);

export default Dashboard;
