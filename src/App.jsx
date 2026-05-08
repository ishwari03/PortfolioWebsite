import React from 'react';
import HomeSection from './sections/HomeSection';
// import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

const App = () => {
  return (
    <div className="main-wrapper">
      <HomeSection />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection/>
      <ContactSection />
    </div>
  );
};

export default App;
