
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  bgColor?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, bgColor = 'bg-brand-brown-light', children }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${bgColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-green-darker text-center mb-10 md:mb-16">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
