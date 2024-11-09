import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import ChatBot from './components/ChatBot';
import SideNavigationBar from './components/SideNavBar';
import CallLogs from './components/CallLogs';
import Analytics from './components/Analytics';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<Landing />} />

        {/* Route for the main application page with sidebar */}
        <Route
          path="/home"
          element={
            <div className="flex h-screen">
              <div className={isSidebarExpanded ? 'w-64' : 'w-20'}>
                <SideNavigationBar toggleSidebar={toggleSidebar} />{' '}
                {/* Sidebar stays fixed */}
              </div>
              <div className="flex-1">
                {/* Content area */}
                <Home /> {/* Home page content */}
              </div>
            </div>
          }
        />

        {/* Route for chatbot page */}
        <Route
          path="/chatbot"
          element={
            <div className="flex h-screen">
              <div className={isSidebarExpanded ? 'w-64' : 'w-20'}>
                <SideNavigationBar toggleSidebar={toggleSidebar} />{' '}
                {/* Sidebar stays fixed */}
              </div>
              <div className="flex-1">
                {' '}
                {/* Content area */}
                <ChatBot /> {/* ChatBot content */}
              </div>
            </div>
          }
        />

        {/* Route for call logs page */}
        <Route
          path="/calllogs"
          element={
            <div className="flex h-screen">
              <div className={isSidebarExpanded ? 'w-64' : 'w-20'}>
                <SideNavigationBar toggleSidebar={toggleSidebar} />{' '}
                {/* Sidebar stays fixed */}
              </div>
              <div className="flex-1">
                {' '}
                {/* Content area */}
                <CallLogs /> {/* CallLogs content */}
              </div>
            </div>
          }
        />

        {/* Route for analytics page */}
        <Route
          path="/analytics"
          element={
            <div className="flex h-screen">
              <div className={isSidebarExpanded ? 'w-64' : 'w-20'}>
                <SideNavigationBar toggleSidebar={toggleSidebar} />{' '}
                {/* Sidebar stays fixed */}
              </div>
              <div className="flex-1">
                {' '}
                {/* Content area */}
                <Analytics /> {/* Analytics content */}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
