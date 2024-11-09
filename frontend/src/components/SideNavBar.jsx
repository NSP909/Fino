import React, { useContext, createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLast, ChevronFirst } from 'lucide-react';
import { TbMessageChatbot, TbDashboard } from 'react-icons/tb';
import { FiHome, FiPhoneCall, FiBarChart2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const SidebarContext = createContext();

export default function SideNavigationBar({
  onSectionChange,
  onExpandedChange,
}) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  useEffect(() => {
    onExpandedChange(expanded);
  }, [expanded, onExpandedChange]);

  return (
    <SidebarContext.Provider value={{ expanded }}>
      <motion.aside
        initial={false}
        animate={{ width: expanded ? '16rem' : '4rem' }}
        className="fixed top-0 left-0 h-screen overflow-hidden z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgb(14,0,36), rgb(74,32,138))',
          boxShadow: '0 0 40px rgba(140,69,255,0.3)',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <nav className="h-full flex flex-col text-white border-r border-purple-500/20">
          <div className="p-4 pb-2 flex justify-between items-center">
            <AnimatePresence>
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
                    Fina Finance
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
            <SidebarItem
              to="/home"
              icon={<FiHome className="stroke-[1.5]" />}
              text="Home"
              onClick={() => onSectionChange('home')}
              active={location.pathname === '/home'}
              expanded={expanded}
            />
            <SidebarItem
              to="/chatbot"
              icon={<TbMessageChatbot className="stroke-[1.5]" />}
              text="Chatbot"
              onClick={() => onSectionChange('chatbot')}
              active={location.pathname === '/chatbot'}
              expanded={expanded}
            />
            <SidebarItem
              to="/calllogs"
              icon={<FiPhoneCall className="stroke-[1.5]" />}
              text="Call Logs"
              onClick={() => onSectionChange('call-logs')}
              active={location.pathname === '/calllogs'}
              expanded={expanded}
            />
            <SidebarItem
              to="/analytics"
              icon={<FiBarChart2 className="stroke-[1.5]" />}
              text="Analytics"
              onClick={() => onSectionChange('analytics')}
              active={location.pathname === '/analytics'}
              expanded={expanded}
            />
          </ul>
        </nav>
      </motion.aside>
    </SidebarContext.Provider>
  );
}

function SidebarItem({ to, icon, text, onClick, active, expanded }) {
  return (
    <li onClick={onClick}>
      <Link to={to}>
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(140,69,255,0.3)' }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors backdrop-blur-sm ${
            active
              ? 'bg-purple-600/50 text-white shadow-lg shadow-purple-500/20'
              : 'text-purple-200 hover:bg-purple-800/30 hover:text-white'
          }`}
        >
          <div className={`text-xl ${!expanded && 'mx-auto'}`}>{icon}</div>
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2 whitespace-nowrap"
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    </li>
  );
}
