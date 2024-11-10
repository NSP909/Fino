import React, { useContext, createContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLast, ChevronFirst } from 'lucide-react';
import { TbMessageChatbot, TbDashboard } from 'react-icons/tb';
import { FiHome, FiPhoneCall, FiBarChart2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarContext = createContext();

export default function SideNavigationBar({
  onSectionChange,
  onExpandedChange,
}) {
  const [expanded, setExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle initial loading state
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    onExpandedChange?.(expanded);
  }, [expanded, onExpandedChange]);

  const navigationItems = [
    { path: '/home', icon: <FiHome className="stroke-[1.5]" />, text: 'Home' },
    {
      path: '/chatbot',
      icon: <TbMessageChatbot className="stroke-[1.5]" />,
      text: 'Chatbot',
    },
    {
      path: '/calllogs',
      icon: <FiPhoneCall className="stroke-[1.5]" />,
      text: 'Call Logs',
    },
    {
      path: '/analytics',
      icon: <FiBarChart2 className="stroke-[1.5]" />,
      text: 'Analytics',
    },
  ];

  if (isLoading) {
    return null; // Prevent flash of content during initial load
  }

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <motion.aside
        initial={false}
        animate={{
          width: expanded ? '16rem' : '4rem',
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        className="fixed top-0 left-0 h-screen overflow-hidden z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgb(14,0,36), rgb(74,32,138))',
          boxShadow: '0 0 40px rgba(140,69,255,0.3)',
        }}
      >
        <nav className="h-full flex flex-col text-white border-r border-purple-500/20">
          <div className="p-4 pb-2 flex justify-between items-center">
            <AnimatePresence mode="wait">
              {expanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/"
                    className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text"
                  >
                    Orbital Finance
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(140,69,255,0.5)',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-purple-900/50 hover:bg-purple-800/50 transition-colors duration-200 backdrop-blur-sm"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </motion.button>
          </div>

          <ul className="flex-1 px-3">
            {navigationItems.map((item) => (
              <SidebarItem
                key={item.path}
                to={item.path}
                icon={item.icon}
                text={item.text}
                onClick={() => onSectionChange?.(item.text.toLowerCase())}
                active={location.pathname === item.path}
                expanded={expanded}
              />
            ))}
          </ul>
        </nav>
      </motion.aside>
    </SidebarContext.Provider>
  );
}

function SidebarItem({ to, icon, text, onClick, active, expanded }) {
  return (
    <motion.li
      onClick={onClick}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={to}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer 
            transition-all duration-200 ease-in-out backdrop-blur-sm
            ${
              active
                ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/20'
                : 'text-purple-200 hover:bg-purple-800/30 hover:text-white'
            }
          `}
        >
          {active && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute inset-0 bg-purple-600/50 rounded-md"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <div className={`relative z-10 text-xl ${!expanded && 'mx-auto'}`}>
            {icon}
          </div>
          <AnimatePresence mode="wait">
            {expanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: 1,
                  width: 'auto',
                  transition: { duration: 0.2, delay: 0.1 },
                }}
                exit={{ opacity: 0, width: 0 }}
                className="relative z-10 ml-2 whitespace-nowrap"
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </motion.li>
  );
}
