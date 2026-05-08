import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 85 },
      { name: "Streamlit", level: 85 },
      { name: "Data Analysis", level: 75 },
      { name: "Machine Learning", level: 75 },
    ],
  },
  {
    title: "Languages, Databases & Tools",
    skills: [
      { name: "C++", level: 75 },
      { name: "Java", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-wrapper">
      {/* Background decoration */}
      <div className="skills-bg-glow" />

      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "5rem" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="skills-subheading"
          >
            My Expertise
          </motion.span>
          <h2 className="skills-heading">Skills & Technologies</h2>
          <p className="skills-description">
            A comprehensive set of technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="skill-card"
            >
              <div className="skill-card-header">
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-dot" />
                </div>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.15 + skillIndex * 0.08,
                      duration: 0.5,
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="skill-fill"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}