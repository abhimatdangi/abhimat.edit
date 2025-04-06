import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.div
      className={`glitch-text-container ${className}`}
      onHoverStart={() => setIsGlitching(true)}
      onHoverEnd={() => setIsGlitching(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <span className="glitch-text">{text}</span>
      {isGlitching && (
        <>
          <span 
            className="glitch-text-layer glitch-text-layer-1"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: 'var(--accent-color)',
              zIndex: 1,
              clipPath: 'inset(0 0 0 0)',
              transform: 'translate(-2px, 0)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span 
            className="glitch-text-layer glitch-text-layer-2"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: '#ff00ff',
              zIndex: 2,
              clipPath: 'inset(0 0 0 0)',
              transform: 'translate(2px, 0)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
    </motion.div>
  );
};

export default GlitchText;