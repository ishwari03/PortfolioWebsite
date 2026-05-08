import React from 'react';
import { Download } from 'lucide-react';

const DownloadResumeButton = ({ className = '' }) => {
  return (
    <a
      href="#"
      download
      onClick={(e) => e.preventDefault()}
      className={`inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm transition-all duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer whitespace-nowrap ${className}`}
    >
      <Download size={16} strokeWidth={2} />
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
