import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import DownloadResumeButton from '../components/DownloadResumeButton';
import FadeIn from '../components/FadeIn';

const ABOUT_TEXT =
  "I am a Computer Engineering student with a proven ability to independently design and deliver secure web apps, smart tools, and prototypes. I am passionate about blending clean frontend design with robust backend architecture to create striking and unforgettable digital experiences.";

const stats = [
  { label: 'Projects Shipped', value: '3+' },
  { label: 'Stack Expertise', value: 'MERN' },
  { label: 'Focus', value: 'AI/ML' },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-10 py-24 bg-[#0C0C0C]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn direction="up" className="w-full text-center mb-12">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Stats row */}
        <FadeIn direction="up" delay={0.15} className="w-full mb-14">
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest font-light text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="w-24 h-px bg-[#D7E2EA]/15 mb-14" />

        {/* Animated paragraph — character by character on scroll */}
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px] text-lg md:text-xl"
        />

        {/* Download Resume CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DownloadResumeButton />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
