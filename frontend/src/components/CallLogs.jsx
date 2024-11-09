import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data - expanded with more varied dates
const mockCallLogs = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    date: '2024-11-09T10:30:00',
    summary:
      'Discussed upcoming project milestones. Client expressed concerns about timeline. Action items: Schedule follow-up meeting, send project timeline document.',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    date: '2024-11-09T09:15:00',
    summary:
      'Product demo for new features. Client was impressed with UI improvements. Requested minor tweaks to dashboard layout.',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john@example.com',
    date: '2024-11-08T14:45:00',
    summary:
      'Technical support call. Resolved login issues. Recommended password reset and 2FA setup.',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    date: '2024-11-08T11:20:00',
    summary:
      'Initial consultation call. Discussed requirements for new mobile app project. Budget and timeline reviewed.',
  },
];

// API function for future use
const fetchCallLogs = async (startDate, endDate, name) => {
  try {
    const response = await fetch('your-api-endpoint/call-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        name,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching call logs:', error);
    return [];
  }
};

const CallLogItem = ({ log, isExpanded, onToggle }) => {
  const date = new Date(log.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div
      layout="position"
      initial={false}
      className="backdrop-blur-sm bg-white/5 rounded-lg mb-4 overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10"
    >
      <motion.div layout="position" className="p-4">
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={onToggle}
        >
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <motion.h3
                  layout="position"
                  className="text-lg font-semibold text-white"
                >
                  {log.name}
                </motion.h3>
                <motion.p layout="position" className="text-sm text-purple-200">
                  {log.email}
                </motion.p>
              </div>
              <div className="text-right">
                <motion.p
                  layout="position"
                  className="text-sm font-medium text-white"
                >
                  {formattedDate}
                </motion.p>
                <motion.p layout="position" className="text-sm text-purple-200">
                  {formattedTime}
                </motion.p>
              </div>
            </div>
          </div>
          <motion.div
            layout="position"
            initial={false}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 w-6 h-6 flex items-center justify-center"
          >
            <ChevronDown className="text-purple-200 w-5 h-5" />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                marginTop: 16,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1,
                  },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
                transition: {
                  height: {
                    duration: 0.3,
                    ease: 'easeIn',
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
            >
              <div className="bg-purple-900/30 rounded-lg p-4">
                <h4 className="text-sm font-medium text-purple-200 mb-2">
                  Call Summary
                </h4>
                <p className="text-sm text-purple-100 leading-relaxed">
                  {log.summary}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const CallLogs = () => {
  const [logs, setLogs] = useState(mockCallLogs);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredLogs = logs
    .filter((log) => {
      const matchesSearch =
        log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.email.toLowerCase().includes(searchTerm.toLowerCase());
      const logDate = new Date(log.date);
      const matchesStartDate = !startDate || logDate >= new Date(startDate);
      const matchesEndDate = !endDate || logDate <= new Date(endDate);
      return matchesSearch && matchesStartDate && matchesEndDate;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          'radial-gradient(75% 75% at center, rgb(140,69,255,.2) 0%, rgb(14,0,36) 100%)',
      }}
    >
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
              Call Logs
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className="flex items-center px-3 py-2 text-sm text-purple-200 hover:text-white"
            >
              <X size={16} className="mr-1" />
              Clear Filters
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="relative col-span-1 sm:col-span-2">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <input
                type="date"
                className="flex-1 px-3 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span className="flex items-center text-purple-300">to</span>
              <input
                type="date"
                className="flex-1 px-3 py-2 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {filteredLogs.length === 0 ? (
          <div className="text-center text-white text-lg">
            No call logs found.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLogs.map((log) => (
              <CallLogItem
                key={log.id}
                log={log}
                isExpanded={expandedId === log.id}
                onToggle={() =>
                  setExpandedId(expandedId === log.id ? null : log.id)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CallLogs;
