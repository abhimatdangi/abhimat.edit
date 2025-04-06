import { motion } from 'framer-motion';

const Clients = () => {
  // Using actual client images from public folder
  const clients = [
    { id: 1, image: '/ania.jpeg', name: 'Ania' },
    { id: 2, image: '/david.jpeg', name: 'David' },
    { id: 3, image: '/koshis.jpg', name: 'Koshis' },
    { id: 4, image: '/ram.jpeg', name: 'Ram' },
    { id: 5, image: '/wayne.jpeg', name: 'Wayne' },
    { id: 6, image: '/creative.jpeg', name: 'Creative' }
  ];

  return (
    <div className="clients-container">
      <div className="clients-wrapper">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="client-logo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 1.2, duration: 0.5 }}
            whileHover={{ 
              scale: 1.2, 
              boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
              zIndex: 5 
            }}
          >
            <img 
              src={client.image} 
              alt={`${client.name}`} 
              className="client-image"
              title={client.name}
            />
          </motion.div>
        ))}
      </div>
      <motion.p 
        className="clients-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Trusted by Amazing People
      </motion.p>
    </div>
  );
};

export default Clients;