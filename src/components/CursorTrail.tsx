import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorParticle extends CursorPosition {
  size: number;
  id: number;
}

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<CursorParticle[]>([]);
  const maxTrailLength = 15;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (mousePosition.x === 0 && mousePosition.y === 0) return;
      
      const newParticle = {
        x: mousePosition.x,
        y: mousePosition.y,
        size: 10 + Math.random() * 15,
        id: Date.now()
      };
      
      setTrail(prevTrail => {
        const updatedTrail = [...prevTrail, newParticle];
        if (updatedTrail.length > maxTrailLength) {
          return updatedTrail.slice(1);
        }
        return updatedTrail;
      });
    }, 40);

    return () => {
      clearTimeout(timer);
    };
  }, [mousePosition]);

  return (
    <>
      {trail.map((particle, index) => {
        const opacity = 1 - index / maxTrailLength;
        const scale = 1 - index / maxTrailLength;
        
        return (
          <div
            key={particle.id}
            style={{
              position: 'fixed',
              left: particle.x,
              top: particle.y,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: `rgba(110, 86, 207, ${opacity})`,
              boxShadow: `0 0 10px rgba(110, 86, 207, ${opacity})`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              zIndex: 9999,
              pointerEvents: 'none',
              transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
            }}
          />
        );
      })}
    </>
  );
};

export default CursorTrail;