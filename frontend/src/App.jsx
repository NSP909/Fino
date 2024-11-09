import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import ChatBot from './components/ChatBot';
import SideNavigationBar from './components/SideNavBar';
import CallLogs from './components/CallLogs';
import Analytics from './components/Analytics';

// Wrapper component to check the current route
const AppContent = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  // Don't show navbar on landing page
  if (location.pathname === '/') {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    );
  }

  // Show navbar for all other routes
  return (
    <div className="flex min-h-screen">
      <SideNavigationBar
        onSectionChange={(section) => console.log(section)}
        onExpandedChange={setExpanded}
      />
      <main
        className={`flex-1 transition-all duration-300 ${
          expanded ? 'ml-64' : 'ml-16'
        }`}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/calllogs" element={<CallLogs />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
