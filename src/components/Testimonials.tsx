import { FaQuoteLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Wayne Danai",
    title: "Online Course Developer",
    quote: "Abhimat provides a very professional service with a 'can do' attitude. His excellent work and responsiveness to revisions make him a highly recommended video editor for any project.",
    image: "/wayne.jpeg",
    linkedIn: "https://www.linkedin.com/in/waynedanai/"
  },
  {
    id: 2,
    name: "David Murumbi",
    title: "Founder of Creative Clip Studios",
    quote: "Abhimat is one of the hardest workers I know! His willingness to improve and meet client demands is exceptional. He's been pivotal in our agency's growth and the revisions are always flawless.",
    image: "/david.jpeg",
    linkedIn: "https://www.linkedin.com/posts/david-murumbi_last-week-was-rough-we-came-this-close-activity-7286034569290498048-DLJ0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6h6JUBR_cxSI4CfD3I2xEkNE8V_mv9dec"
  },
  {
    id: 3,
    name: "Koshish Rijal",
    title: "Content Creator/Editor",
    quote: "Working with Abhimat has been an absolute game-changer! His edits are always creative, professional, and delivered on time. Highly recommend his services for anyone looking to elevate their content.",
    image: "/koshis.jpg",
    linkedIn: "https://www.linkedin.com/in/koshishrijal/"
  },
  {
    id: 4,
    name: "Ania Skorek",
    title: "Content Marketing Strategist",
    quote: "That's really good! I like it!",
    image: "/ania.jpeg",
    linkedIn: "https://www.linkedin.com/posts/ania-skorek-video-marketing_dont-let-your-repurposed-videos-look-like-activity-7312434001976152064-5eg2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6h6JUBR_cxSI4CfD3I2xEkNE8V_mv9dec"
  },
  {
    id: 5,
    name: "Ram Chettri",
    title: "Talent Acquisition Specialist @ WeAre Solutions Oy",
    quote: "I really like the video, thank you so much Abhimat.",
    image: "/ram.jpeg",
    linkedIn: "https://www.linkedin.com/in/ramchhetri/"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <ScrollReveal direction="down">
          <h2 className="section-title">Testimonials</h2>
        </ScrollReveal>
        
        {/* First row of testimonials */}
        <div className="testimonials-row">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.2} direction="up">
              <motion.a 
                href={testimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-link"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <motion.div 
                  className="testimonial-card"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="testimonial-header">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-image"
                      whileHover={{ scale: 1.1, rotate: 5 }} 
                    />
                    <div className="testimonial-author">
                      <p className="name">{testimonial.name}</p>
                      <p className="role">{testimonial.title}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="quote">{testimonial.quote}</p>
                </motion.div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Second row of testimonials */}
        <div className="testimonials-row last-row">
          {testimonials.slice(3).map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={(index + 3) * 0.2} direction="up">
              <motion.a 
                href={testimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-link"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <motion.div 
                  className="testimonial-card"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="testimonial-header">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-image"
                      whileHover={{ scale: 1.1, rotate: 5 }} 
                    />
                    <div className="testimonial-author">
                      <p className="name">{testimonial.name}</p>
                      <p className="role">{testimonial.title}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="quote">{testimonial.quote}</p>
                </motion.div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;