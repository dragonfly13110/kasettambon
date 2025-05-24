
import React from 'react';

export const NetworkSection: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <img 
        src="https://picsum.photos/seed/networkmap/800/400?grayscale" 
        alt="แผนที่เครือข่ายเกษตรตำบลทั่วประเทศ" 
        className="rounded-lg shadow-md mx-auto mb-8"
      />
      <p className="text-lg text-brand-text mb-4">
        เชื่อมโยงนักวิชาการส่งเสริมการเกษตรประจำตำบลทั่วประเทศ เพื่อร่วมกันแลกเปลี่ยนองค์ความรู้ ประสบการณ์
        และสร้างความเข้มแข็งให้กับภาคการเกษตรของไทยอย่างยั่งยืน
      </p>
      <p className="text-brand-text mb-6">
        เข้าร่วมกลุ่มเครือข่าย หรือค้นหาผู้เชี่ยวชาญเฉพาะด้านในพื้นที่ต่างๆ (ส่วนนี้เป็นตัวอย่างเนื้อหา)
      </p>
      <a
        href="#" // Mock link
        className="inline-block bg-brand-green-dark text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-brand-green-darker transition-colors"
      >
        เข้าร่วมเครือข่าย (ตัวอย่าง)
      </a>
    </div>
  );
};
