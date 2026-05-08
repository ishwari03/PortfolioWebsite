import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import FadeIn from '../components/FadeIn';

const projects = [
  {
    number: '01',
    category: 'Full-Stack · MERN',
    name: 'PayWay',
    subtitle: 'Digital Wallet App',
    description:
      'Engineered a secure digital wallet with UPI payments, QR scanning, and transaction tracking using the MERN stack and JWT authentication.',
    image: '/images/payway-mockup.png',
    href: 'https://github.com/ishwari03/Digital_Wallet',
    accent: '#b600a8',
    tags: ['MongoDB','Express.js', 'React.js', 'Node.js'],
  },
  {
    number: '02',
    category: 'Frontend · React',
    name: 'Notiva',
    subtitle: 'Markdown Notes App',
    description:
      'Delivered a responsive notes app with live Markdown preview, word count, and autosave using React and Vite.',
    image: '/images/notiva-mockup.png',
    href: 'https://notiva-psi.vercel.app/',
    accent: '#2196F3',
    tags: ['React.js','JavaScript'],
  },
  {
    number: '03',
    category: 'AI · Machine Learning',
    name: 'Fitness Tracker',
    subtitle: 'AI Tool',
    description:
      'Crafted a web app with Streamlit and Random Forest to track fitness data and provide personalized recommendations.',
    image: '/images/fitness-mockup.png',
    href: 'https://github.com/ishwari03/Fitness_Tracker',
    accent: '#00C896',
    tags: ['Python', 'Streamlit', 'ML', 'AI'],
  },
];

const StickyCard = ({ project, index, totalCards }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Keep the scale effect so they stack like a deck of cards, but remove the opacity fade
  const scaleDown = index < totalCards - 1 ? useTransform(scrollYProgress, [0, 1], [1, 0.93]) : undefined;

  const topOffset = 80 + index * 24;

  return (
    <div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `${topOffset}px`,
        zIndex: 10 + index,
        paddingBottom: index < totalCards - 1 ? '0' : '0',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <motion.div
        style={{
          scale: scaleDown,
          transformOrigin: 'top center',
        }}
        className="w-full rounded-[50px] border-2 border-[#D7E2EA]/20 bg-[#0f0f0f] overflow-hidden shadow-2xl"
      >
        {/* Card content */}
        <div className="p-8 md:p-10">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            {/* Left: meta + title */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-light uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{
                    color: project.accent,
                    borderColor: project.accent + '40',
                    backgroundColor: project.accent + '10',
                  }}
                >
                  {project.number}
                </span>
                <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-light">
                  {project.category}
                </span>
              </div>

              <h3
                className="hero-heading font-black uppercase leading-none tracking-tight mt-1"
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 5rem)' }}
              >
                {project.name}
              </h3>
              <span className="text-[#D7E2EA]/60 text-sm font-light uppercase tracking-widest">
                {project.subtitle}
              </span>
            </div>

            {/* Right: description + live button */}
            <div className="flex flex-col items-start md:items-end gap-4 md:max-w-[320px]">
              <LiveProjectButton href={project.href} />
              <p className="text-[#D7E2EA]/55 font-light text-sm leading-relaxed md:text-right">
                {project.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[#D7E2EA]/8 text-[#D7E2EA]/60 uppercase tracking-wide border border-[#D7E2EA]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image showcase */}
          <div
            className="relative w-full rounded-[32px] overflow-hidden"
            style={{
              background: '#111',
              border: `1px solid ${project.accent}20`,
            }}
          >
            {/* Accent glow at top */}
            <div
              className="absolute inset-x-0 top-0 h-1 opacity-80"
              style={{
                background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${project.accent}, transparent)`,
              }}
            />
            <img
              src={project.image}
              alt={`${project.name} UI mockup`}
              className="w-full object-cover object-top relative z-10"
              style={{ height: 'clamp(180px, 32vh, 360px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] -mt-14 z-10 px-5 md:px-10 pt-20"
    >
      {/* Heading */}
      <FadeIn direction="up" className="text-center mb-20">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky stacking cards container */}
      <div className="relative flex flex-col gap-6 pb-32">
        {projects.map((project, i) => (
          <StickyCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;