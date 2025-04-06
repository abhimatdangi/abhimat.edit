import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { FaPlay, FaChevronDown, FaRocket, FaPuzzlePiece, FaHeadset, FaInstagram, FaLinkedinIn, FaXTwitter, FaCircleCheck, FaMessage } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import './App.css'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import ToolStack from './components/ToolStack'

// Import custom effect components
import ScrollReveal from './components/ScrollReveal'
import GlitchText from './components/GlitchText'

// Sample data for the videos (replace with actual YouTube video IDs)
const shortFormVideos = [
  { id: 'YpUUuBaIE5I', title: 'Short Edit 1' },
  { id: 'xI3G7My3A7Q', title: 'Short Edit 2' },
  { id: 'sbPWa1VcjVE', title: 'Short Edit 3' },
  { id: 'zMm1nDtiYKk', title: 'Short Edit 4' },
  { id: '-IaL88YLt6w', title: 'Short Edit 5' },
  { id: 'Sxh8taZDoTk', title: 'Short Edit 6' }
];

const longFormVideos = [
  { id: '-vsoU32LJq4', title: 'Long Edit 1' },
  { id: 'lweSyrR0Y3M', title: 'Long Edit 2' },
  { id: '9tYKA-XGCnQ', title: 'Long Edit 3' },
  { id: 'ui2AIQU_vAY', title: 'Long Edit 4' }
];

const whyChooseUs = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Every edit is crafted with meticulous attention to detail, ensuring professional results every time.",
    icon: <FaCircleCheck />
  },
  {
    id: 2,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality, because we know timing is crucial in content creation.",
    icon: <FaRocket />
  },
  {
    id: 3,
    title: "Custom Approach",
    description: "Personalized editing that matches your unique style and resonates with your target audience.",
    icon: <FaPuzzlePiece />
  },
  {
    id: 4,
    title: "Ongoing Support",
    description: "Unlimited revisions and continuous communication to ensure your complete satisfaction.",
    icon: <FaHeadset />
  }
];

const faqs = [
  {
    id: 1,
    question: "What do you need from me to start editing?",
    answer: "Raw footage, brand details (fonts, colors, style), and clean audio recorded with a good mic."
  },
  {
    id: 2,
    question: "How long does the editing process take?",
    answer: "Turnaround time depends on the complexity and length of the project. Short-form content typically takes 2-3 business days, while long-form content may take 4-7 business days."
  },
  {
    id: 3,
    question: "Do you provide revisions?",
    answer: "Yes, we offer multiple rounds of revisions to ensure your complete satisfaction with the final product."
  },
  {
    id: 4,
    question: "What file formats do you accept and deliver?",
    answer: "We accept most video formats including MP4, MOV, and AVI. Final deliverables are typically provided in MP4 format, but we can accommodate specific requirements."
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })
      
      // Add/remove scrolled class based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Call handleScroll initially to set correct initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Navbar with glassmorphism effect */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <GlitchText text="abhimat.edit" />
          </div>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <motion.a 
              href="https://www.instagram.com/prodbyabhimat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abhimatdangi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a 
              href="https://x.com/abhimatdc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter />
            </motion.a>
          </div>
          
          <div className="nav-links">
            <motion.a 
              href="#edits" 
              className={activeSection === 'edits' ? 'active' : ''}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Edits
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className={activeSection === 'testimonials' ? 'active' : ''}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helping <span className="blue-glow-text">creators</span> and <span className="blue-glow-text">founders</span> make videos that<br />audiences can't stop watching.
          </motion.h1>
          <div className="hero-buttons">
            <motion.a 
              href="#edits" 
              className="cta-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(110, 86, 207, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Edits</span>
              <FaPlay />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/abhimatdangi/" 
              className="cta-button dm-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(110, 86, 207, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>DM Me</span>
              <FaMessage />
            </motion.a>
          </div>
          
          {/* Clients Section */}
          <div className="clients-section">
            <Clients />
          </div>
        </div>
      </header>

      {/* Edits Section */}
      <section id="edits" className="edits-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Short-Form Edits</h2>
          </ScrollReveal>
          <div className="video-grid short-form">
            {shortFormVideos.slice(0, 3).map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 0.15} direction="up">
                <motion.div 
                  className="youtube-container short-form-container"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <YouTube 
                    videoId={video.id} 
                    opts={{ 
                      width: '100%', 
                      height: '100%',
                      playerVars: {
                        modestbranding: 1,
                        showinfo: 0,
                        controls: 1,
                        rel: 0,
                        fs: 1,
                        iv_load_policy: 3,
                        mute: 0 // Explicitly set mute to 0 to ensure audio is enabled
                      } 
                    }}
                    className="youtube-player"
                    onReady={(event) => {
                      // Pause video on load and handle player setup
                      event.target.pauseVideo();
                      // Ensure volume is set to a reasonable level
                      event.target.setVolume(80);
                    }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="video-grid short-form">
            {shortFormVideos.slice(3, 6).map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 0.15 + 0.3} direction="up">
                <motion.div 
                  className="youtube-container short-form-container"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <YouTube 
                    videoId={video.id} 
                    opts={{ 
                      width: '100%', 
                      height: '100%',
                      playerVars: {
                        modestbranding: 1,
                        showinfo: 0,
                        controls: 1,
                        rel: 0,
                        fs: 1,
                        iv_load_policy: 3,
                        mute: 0 // Explicitly set mute to 0 to ensure audio is enabled
                      } 
                    }}
                    className="youtube-player"
                    onReady={(event) => {
                      // Pause video on load and handle player setup
                      event.target.pauseVideo();
                      // Ensure volume is set to a reasonable level
                      event.target.setVolume(80);
                    }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} direction="left">
            <h2 className="section-title">Long-Form Edits</h2>
          </ScrollReveal>
          <div className="video-grid long-form">
            {longFormVideos.slice(0, 2).map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 0.2 + 0.4} direction="right">
                <motion.div 
                  className="youtube-container long-form-container"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)' 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <YouTube 
                    videoId={video.id} 
                    opts={{ 
                      width: '100%', 
                      height: '100%',
                      playerVars: {
                        modestbranding: 1,
                        showinfo: 0,
                        controls: 1,
                        rel: 0,
                        fs: 1,
                        mute: 0 // Explicitly set mute to 0 to ensure audio is enabled
                      } 
                    }}
                    className="youtube-player"
                    onReady={(event) => {
                      event.target.pauseVideo();
                      // Ensure volume is set to a reasonable level
                      event.target.setVolume(80);
                    }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="video-grid long-form">
            {longFormVideos.slice(2, 4).map((video, index) => (
              <ScrollReveal key={video.id} delay={index * 0.2 + 0.6} direction="right">
                <motion.div 
                  className="youtube-container long-form-container"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <YouTube 
                    videoId={video.id} 
                    opts={{ 
                      width: '100%', 
                      height: '100%',
                      playerVars: {
                        modestbranding: 1,
                        showinfo: 0,
                        controls: 1,
                        rel: 0,
                        fs: 1,
                        mute: 0 // Explicitly set mute to 0 to ensure audio is enabled
                      } 
                    }}
                    className="youtube-player"
                    onReady={(event) => {
                      event.target.pauseVideo();
                      // Ensure volume is set to a reasonable level
                      event.target.setVolume(80);
                    }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* DM me button section */}
          <div className="dm-section">
            <ScrollReveal delay={0.3} direction="up">
              <motion.a 
                href="https://www.linkedin.com/in/abhimatdangi/" 
                className="cta-button dm-button-large"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(110, 86, 207, 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>DM Me</span>
                <FaMessage />
              </motion.a>
              <p className="pricing-text">for pricing</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Using the new Testimonials component */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-section">
        <div className="container">
          <ScrollReveal direction="down">
            <h2 className="section-title">Why I'm The Best Fit For You</h2>
          </ScrollReveal>
          <div className="benefits-grid">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                <motion.div 
                  className="benefit-card"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(110, 86, 207, 0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="benefit-icon-wrapper">
                    <motion.div 
                      className="benefit-icon"
                      whileHover={{ 
                        rotate: 5, 
                        scale: 1.1 
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <div className="benefit-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="glow-border"></div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ToolStack Section */}
      <ToolStack />

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <ScrollReveal direction="down">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.id} delay={index * 0.1} direction="up">
                <motion.div 
                  className={`faq-item ${expandedFaq === faq.id ? 'active' : ''}`}
                  initial={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(110, 86, 207, 0.2)'
                  }}
                  animate={{ 
                    borderColor: expandedFaq === faq.id 
                      ? 'rgba(110, 86, 207, 0.5)' 
                      : 'rgba(255, 255, 255, 0.05)'
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div 
                    className="faq-question"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <motion.div
                      animate={{ 
                        rotate: expandedFaq === faq.id ? 180 : 0,
                        color: expandedFaq === faq.id ? 'var(--accent-color)' : 'white'
                      }}
                      transition={{ duration: 0.3 }}
                      className="faq-icon"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="faq-answer"
                    variants={{
                      collapsed: { height: 0, opacity: 0, marginTop: 0 },
                      expanded: { height: 'auto', opacity: 1, marginTop: '0.5rem' }
                    }}
                    initial="collapsed"
                    animate={expandedFaq === faq.id ? "expanded" : "collapsed"}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.04, 0.62, 0.23, 0.98]
                    }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section id="social-media" className="social-media-section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="social-media-container">
              <h2 className="section-title">Connect With Me</h2>
              <div className="social-links-container">
                <motion.a 
                  href="https://www.instagram.com/prodbyabhimat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="social-icon-large" />
                  <span>Instagram</span>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/abhimatdangi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="social-icon-large" />
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="https://x.com/abhimatdc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(110, 86, 207, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaXTwitter className="social-icon-large" />
                  <span>X / Twitter</span>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default App