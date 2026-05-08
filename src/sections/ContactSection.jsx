import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Link2, Code2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const contactItems = [
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: 'Email',
    value: 'igkp2004@gmail.com',
    href: 'mailto:igkp2004@gmail.com',
  },
  {
    icon: <Link2 size={20} strokeWidth={1.5} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ishwari',
    href: 'http://linkedin.com/in/ishwari-pusadkar-3a969228b',
  },
  {
    icon: <Code2 size={20} strokeWidth={1.5} />,
    label: 'GitHub',
    value: 'github.com/ishwari',
    href: 'https://github.com/ishwari03',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] flex flex-col items-center justify-center px-8 md:px-10 py-28"
      style={{ minHeight: '50vh' }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(118,33,176,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn direction="up" className="text-center mb-6">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 9rem)' }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn direction="up" delay={0.1} className="mb-16 text-center">
          <p className="text-[#D7E2EA]/40 font-light uppercase tracking-widest text-sm">
            Open to opportunities · Let&apos;s build something great together
          </p>
        </FadeIn>

        {/* Contact items list */}
        <div className="flex flex-col w-full gap-4">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} direction="up" delay={i * 0.08}>
              <motion.a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 py-4 px-6 rounded-2xl border border-[#D7E2EA]/8 bg-[#D7E2EA]/2 transition-all duration-300 hover:border-[#D7E2EA]/20 hover:bg-[#D7E2EA]/5"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center text-[#D7E2EA]/50 group-hover:text-[#D7E2EA]/80 group-hover:border-[#D7E2EA]/30 transition-all duration-300">
                  {item.icon}
                </span>

                {/* Label */}
                <span className="text-[#D7E2EA]/35 text-xs font-light uppercase tracking-widest min-w-[60px] group-hover:text-[#D7E2EA]/55 transition-colors duration-200">
                  {item.label}
                </span>

                {/* Value */}
                <span
                  className="text-[#D7E2EA] font-medium tracking-wide group-hover:text-white transition-colors duration-200 flex-1"
                  style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
                >
                  {item.value}
                </span>

                {/* Arrow indicator */}
                <motion.span
                  className="text-[#D7E2EA]/20 text-lg group-hover:text-[#D7E2EA]/60 transition-colors duration-200 hidden md:block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.4} className="mt-14">
          <ContactButton />
        </FadeIn>

        {/* Divider */}
        <div className="w-full h-px bg-[#D7E2EA]/8 mt-20 mb-8" />

        {/* Footer */}
        <p className="text-[#D7E2EA]/25 text-xs uppercase tracking-widest font-light text-center">
          © {new Date().getFullYear()} Ishwari Pusadkar · All Rights Reserved 
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
