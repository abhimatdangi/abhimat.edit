import React from 'react';
import { motion } from 'framer-motion';
import { SiAdobeaftereffects, SiAdobepremierepro, SiSlack, SiGoogledrive } from 'react-icons/si';

interface Tool {
  name: string;
  icon: React.ReactNode;
}

const ToolStack: React.FC = () => {
  const tools: Tool[] = [
    { name: 'After Effects', icon: <SiAdobeaftereffects /> },
    { name: 'Premiere Pro', icon: <SiAdobepremierepro /> },
    { name: 'Slack', icon: <SiSlack /> },
    { name: 'Google Drive', icon: <SiGoogledrive /> },
  ];

  return (
    <section className="toolstack-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="toolstack-header"
        >
          <h2 className="section-title">My Toolstack</h2>
        </motion.div>
        
        <div className="toolstack-container">
          <div className="toolstack-items">
            {tools.map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                className="toolstack-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 15px rgba(110, 86, 207, 0.3)'
                }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-name">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;