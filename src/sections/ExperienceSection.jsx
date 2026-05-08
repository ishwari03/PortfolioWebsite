import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn'; // Ensure this path is correct
import * as Lucide from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Intern",
    company: "Edunet Foundation / EY GDS & AICTE",
    duration: "Mar 2025 - Apr 2025",
    description: [
      "Engineered a secure digital wallet app (PayWay) with UPI payments, QR scanning, and JWT authentication using the MERN stack.",
      "Optimized Express.js APIs for faster transactions and a seamless user experience.",
      "Designed an interactive dashboard with real-time expense tracking and alerts.",
      "Worked independently with industry mentorship, strengthening full-stack skills and hands-on project execution."
    ],
    skills: ["Full-Stack Development", "React.js", "Express.js", "MongoDB", "Node.js"],
    accent: "#b600a8" // Magenta
  },
  {
    id: 2,
    role: "AI Intern",
    company: "AICTE / TechSaksham (Microsoft & SAP)",
    duration: "Feb 2025 - Mar 2025",
    description: [
      "Crafted a personalized fitness tracker in Python with Streamlit, using user inputs to generate tailored recommendations.",
      "Integrated AI features including calorie prediction, AI-based suggestions, and a BMI calculator.",
      "Enabled goal setting and basic progress tracking via interactive charts.",
      "Gained hands-on experience in Python, data handling, and executing end-to-end AI projects."
    ],
    skills: ["Python", "Streamlit", "Artificial Intelligence", "Data Handling"],
    accent: "#20C997" // Teal
  },
  {
    id: 3,
    role: "AI Intern",
    company: "IBM SkillsBuild - CRSBOX",
    duration: "Jul 2024 - Aug 2024",
    description: [
      "Explored deep learning, NLP, and reinforcement learning through real-world projects.",
      "Engaged in webinars and collaborative sessions to apply AI solutions to modern problems."
    ],
    skills: ["Deep Learning", "NLP", "Reinforcement Learning", "AI"],
    accent: "#3B82F6" // Blue
  }
];

const ExperienceSection = () => {
  // Helper to safely render icons
  const Icon = ({ name, ...props }) => {
    const LucideIcon = Lucide[name];
    return LucideIcon ? <LucideIcon {...props} /> : null;
  };

  return (
    <section
      id="experience"
      className="min-h-screen relative bg-[#0C0C0C] z-10 px-6 md:px-10 py-24"
    >
      <div className="max-w-4xl mx-auto relative">
        
        {/* HUGE EXPERIENCE HEADING */}
        <FadeIn direction="up" className="w-full text-center mb-24 md:mb-32">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="relative w-full">
          {/* THE VERTICAL TIMELINE LINE */}
          <div className="absolute left-[20px] md:left-[40px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* TIMELINE ITEMS */}
          <div className="flex flex-col gap-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
                className="relative pl-14 md:pl-28 w-full"
              >
                {/* TIMELINE GLOWING NODE */}
                <div 
                  className="absolute left-[15px] md:left-[35px] top-[14px] w-3 h-3 rounded-full ring-4 ring-[#0C0C0C] z-10"
                  style={{ 
                    backgroundColor: exp.accent,
                    boxShadow: `0 0 15px ${exp.accent}` 
                  }}
                />

                <div className="flex flex-col group">
                  {/* Header: Role, Company, Date */}
                  <div className="flex flex-col gap-3 mb-6">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mt-1">
                      <div className="flex items-center gap-2 font-bold" style={{ color: exp.accent }}>
                        <Icon name="Briefcase" className="w-5 h-5" />
                        <span className="text-lg md:text-xl">{exp.company}</span>
                      </div>
                      
                      <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></div>

                      <div className="inline-flex items-center gap-2 text-sm tracking-widest text-white/50 font-medium uppercase">
                        <Icon name="Calendar" className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/70 text-base md:text-lg leading-relaxed">
                        <Icon 
                          name="ChevronRight" 
                          className="w-5 h-5 shrink-0 mt-1" 
                          style={{ color: exp.accent }} 
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Capsule Row */}
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm px-4 py-2 rounded-full bg-white/5 text-white/80 tracking-wide border border-white/10 transition-colors hover:bg-white/10 hover:border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;