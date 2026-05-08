import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// Ensure these paths are exactly correct for your project structure
import BlurText from '../components/BlurText';
import ShapeGrid from '../components/ShapeGrid';
import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import * as Lucide from 'lucide-react';

const HomeSection = () => {
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll tracking for the parallax "Curtain Reveal" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const splashOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const splashScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // Helper to prevent crash if an icon is missing in the installed version
  const Icon = ({ name, ...props }) => {
    const LucideIcon = Lucide[name];
    return LucideIcon ? <LucideIcon {...props} /> : null;
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu on click
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div id="home" ref={containerRef} className="relative w-full bg-[#0C0C0C] text-white">
      
      {/* =========================================
          FIXED NAVBAR (RESPONSIVE)
          ========================================= */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 bg-[#0C0C0C]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between w-full relative">
          
          <a href="#home" onClick={closeMenu}>
            <img 
              src="/images/logo.png" 
              alt="Ishwari Pusadkar Logo" 
              className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70 uppercase tracking-widest font-medium transition-colors">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors" onClick={scrollToAbout}>Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <button 
            className="md:hidden text-white/80 hover:text-white focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="w-8 h-8" />
          </button>

        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0C0C0C]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-8 flex flex-col items-center gap-8 md:hidden"
            >
              <a href="#home" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">Home</a>
              <a href="#about" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">About</a>
              <a href="#projects" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">Projects</a>
              <a href="#skills" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">Skills</a>
              <a href="#experience" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">Experience</a>
              <a href="#contact" onClick={closeMenu} className="text-white/70 hover:text-[#20C997] uppercase tracking-widest text-sm font-medium transition-colors">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* =========================================
          SECTION 1: SPLASH SCREEN
          ========================================= */}
      <section className="sticky top-0 h-screen w-full z-0 overflow-hidden bg-[#0C0C0C]">
        <motion.div 
          style={{ opacity: splashOpacity, scale: splashScale }}
          className="w-full h-full flex flex-col items-center justify-center relative"
        >
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <ShapeGrid
              direction="diagonal"
              speed={0.3}
              squareSize={50}
              borderColor="rgba(255, 255, 255, 0.05)"
              hoverFillColor="transparent"
              shape="square"
              hoverTrailAmount={0}
            />
          </div>

          <motion.div
            className="relative text-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="relative inline-flex items-start justify-center">
              <BlurText
                text="Portfolio"
                animateBy="letters"
                direction="top"
                delay={150}
                className="text-7xl md:text-[12rem] lg:text-[15rem] font-black text-white tracking-tighter"
              />
              <span className="absolute -top-6 -right-4 text-2xl md:text-4xl font-bold text-white/80 rotate-12">
                2026
              </span>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-6"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <span className="bg-[#FF6584] text-white px-4 py-1.5 rounded-full text-sm md:text-base font-bold shadow-lg rotate-[-4deg]">
                Full-Stack Developer
              </span>
              <span className="bg-[#C4FF33] text-black px-4 py-1.5 rounded-full text-sm md:text-base font-bold shadow-lg rotate-[3deg]">
                By Ishwari Pusadkar
              </span>
              <span className="bg-[#8A2BE2] text-white px-4 py-1.5 rounded-full text-sm md:text-base font-bold shadow-lg rotate-[-2deg]">
                React & AI
              </span>
            </motion.div>
          </motion.div>

          <Icon 
            name="ArrowDown" 
            className="w-8 h-8 animate-bounce text-white/50 mb-8 absolute bottom-0 cursor-pointer z-20"
            onClick={scrollToAbout}
          />
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: ABOUT ME 
          ========================================= */}
      <section 
        id="about"
        ref={aboutRef} 
        className="min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center pt-24 pb-20 px-6 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* HUGE ABOUT ME HEADING */}
        <FadeIn direction="up" className="w-full text-center mb-12">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* UNIFIED CONTAINER */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl w-full mx-auto items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] shadow-2xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          
          {/* LEFT COLUMN: Polaroid Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="bg-[#151515] p-4 md:p-6 pb-12 md:pb-16 rounded-2xl border border-white/10 shadow-2xl relative group hover:rotate-0 transition-transform duration-500 max-w-md mx-auto w-full"
          >
            <div className="flex gap-2 mb-4 ml-1">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>

            <img
              src="/images/formalPhoto.jpg"
              alt="Ishwari Pusadkar"
              className="w-full aspect-[4/5] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* RIGHT COLUMN: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            className="flex flex-col justify-center text-center lg:text-left h-full"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <span className="text-[#b600a8] tracking-[0.4em] text-sm md:text-base font-bold uppercase">
                HELLO, I'M
              </span>
              <div className="w-12 h-[2px] bg-[#b600a8]"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 tracking-tight leading-none">
              Ishwari Pusadkar
            </h2>
            <p className="text-lg md:text-xl text-[#D7E2EA]/80 font-medium mb-6">
              Full-Stack Developer
            </p>

            <div className="inline-flex px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm tracking-wider mb-8 text-[#D7E2EA] w-max mx-auto lg:mx-0 shadow-inner">
              MERN • React.js • Python • AI/ML
            </div>

            {/* ANIMATED TEXT EFFECT FOR BIO */}
            <div className="mb-10 mx-auto lg:mx-0 max-w-lg">
              <AnimatedText
                text="I’m a Computer Engineering student currently pursuing my degree at MESWCOE. I specialize in building secure web applications, smart AI tools, and interactive experiences. With a strong foundation in both frontend and backend architecture, I love blending creativity into technology to build unforgettable digital solutions."
                className="text-white/70 leading-relaxed text-base md:text-lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-auto">
              <div className="space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-[#b600a8]">
                  <Icon name="Mail" className="w-6 h-6" />
                  <span>igkp2004@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm text-[#b600a8]">
                  <Icon name="MapPin" className="w-6 h-6" />
                  <span>Pune, India</span>
                </div>
              </div>

              <motion.a
                href="/Ishwari_Pusadkar_9529308660.pdf" 
                download
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-white/10 rounded-full text-white transition-colors w-full sm:w-auto shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Icon name="Download" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="font-medium tracking-wide text-sm uppercase">Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>
      </section>

    </div>
  );
};

export default HomeSection;