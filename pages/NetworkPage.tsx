import React from 'react';
import { Section } from '../components/Section';
import { NetworkSection as NetworkContent } from '../components/NetworkSection';
import { PageKey } from '../types';

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const NetworkPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <Section id="network-page" title="เครือข่ายเกษตรตำบล">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-brand-text leading-relaxed">
          ชุมชนออนไลน์สำหรับนักวิชาการส่งเสริมการเกษตรทั่วประเทศ เป็นพื้นที่สำหรับแลกเปลี่ยนความรู้ ประสบการณ์ ปัญหาและแนวทางแก้ไข รวมถึงสร้างความร่วมมือระหว่างกัน เพื่อเสริมสร้างความเข้มแข็งของเครือข่ายและขับเคลื่อนงานส่งเสริมการเกษตรให้มีประสิทธิภาพยิ่งขึ้น
        </p>
      </div>
      <NetworkContent />
    </Section>
  );
};

export default NetworkPage;