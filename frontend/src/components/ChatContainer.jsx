import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Bot, User, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content:
        'Welcome to our corporate assistance center. How may I help you today?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
    };
    console.log('user log is', userMessage);
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    console.log(JSON.stringify({ question: userMessage.content }));

    try {
      const response = await fetch('http://localhost:8000/chatbot', {
        // mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('data is', data);

      // Check if the response is an error message
      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'bot',
            content: data.error,
          },
        ]);
      } else {
        // If the response is a list of results, format it as a string
        const botResponse = Array.isArray(data)
          ? data.map((item) => JSON.stringify(item)).join('\n')
          : data.message || JSON.stringify(data);

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'bot',
            content: botResponse,
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: 'bot',
          content:
            "I apologize, but I'm unable to process your request at the moment. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const MessageBubble = React.memo(({ message }) => {
    const isBot = message.type === 'bot';

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex w-full mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
      >
        <div
          className={`flex items-start max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              isBot
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 mr-2'
                : 'bg-gradient-to-br from-purple-500 to-blue-500 ml-2'
            } shadow-lg`}
          >
            {isBot ? (
              <Bot size={24} className="text-white" />
            ) : (
              <User size={24} className="text-white" />
            )}
          </div>
          <div
            className={`p-4 rounded-lg ${
              isBot
                ? 'bg-white/10 text-white border border-white/10'
                : 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-white border border-white/10'
            } shadow-lg backdrop-blur-sm`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          </div>
        </div>
      </motion.div>
    );
  });

  MessageBubble.displayName = 'MessageBubble';

  const memoizedMessages = useMemo(
    () =>
      messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      )),
    [messages],
  );

  return (
    <div className="flex flex-col h-screen bg-[radial-gradient(75%_75%_at_center,rgba(29,78,216,0.15)_0%,rgb(14,0,36)_100%)]">
      <div className="p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-100 to-purple-200 text-transparent bg-clip-text">
          Corporate Assistant
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {memoizedMessages}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-white/70"
          >
            <Loader className="w-4 h-4 animate-spin" />
            <span className="text-sm">Processing your request...</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-6 backdrop-blur-sm bg-white/5 border-t border-white/10"
      >
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 rounded-lg bg-white/5 text-white placeholder-white/50 
                     border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                     shadow-inner"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white
                     hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                     focus:ring-purple-500/50 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <Send size={20} className={isLoading ? 'opacity-50' : ''} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
