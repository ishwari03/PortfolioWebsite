import React from 'react';

const ContactButton = ({ onClick, className = '' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`contact-btn px-8 py-3 rounded-full text-white font-medium uppercase tracking-widest text-sm transition-all duration-200 cursor-pointer whitespace-nowrap ${className}`}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
