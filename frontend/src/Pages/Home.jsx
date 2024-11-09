import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Analytics from '../components/Analytics';
import CallLogs from '../components/CallLogs';
import ChatBot from '../components/ChatBot';

function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'call-logs':
        return <CallLogs />;
      case 'chatbot':
        return <ChatBot />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="home">
      <div className="content-area">{renderContent()}</div>
    </div>
  );
}

export default Home;
