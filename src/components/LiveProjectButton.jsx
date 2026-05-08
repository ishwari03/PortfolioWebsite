import React from 'react';
import { ExternalLink } from 'lucide-react';

const LiveProjectButton = ({ href = '#', className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm transition-all duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer whitespace-nowrap ${className}`}
    >
      <ExternalLink size={14} strokeWidth={2} />
      Live Project
    </a>
  );
};

export default LiveProjectButton;
