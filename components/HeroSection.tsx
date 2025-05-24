import React from 'react';
import { PageKey } from '../types';

interface HeroSectionProps {
  navigateTo: (page: PageKey) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ navigateTo }) => {
  return (
    <section id="hero" className="relative bg-brand-green-dark text-white h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/thaiagriculture/1920/1080?blur=2')" }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          ยินดีต้อนรับสู่คลังความรู้เกษตรตำบล
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          แหล่งรวบรวมองค์ความรู้ เทคโนโลยี และเครื่องมือที่จำเป็น
          เพื่อสนับสนุนการทำงานของนักวิชาการส่งเสริมการเกษตรทั่วประเทศ
        </p>
        <a
          href="#mission"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('mission');
          }}
          className="mt-8 inline-block bg-white text-brand-green-darker font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-brand-green-light hover:text-brand-green-darker transition-colors text-lg"
        >
          เริ่มต้นใช้งาน
        </a>
      </div>
    </section>
  );
};