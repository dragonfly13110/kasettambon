import React from 'react';
import { Section } from '../components/Section';
import { MissionSection as MissionContent } from '../components/MissionSection';
import { PageKey } from '../types';

interface PageProps {
  navigateTo: (page: PageKey) => void; // Included for consistency, may not be used directly
}

const MissionPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <Section id="mission-page" title="ภารกิจและหน้าที่ของเกษตรตำบล">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-brand-text leading-relaxed">
          ภารกิจหลักของนักวิชาการส่งเสริมการเกษตรประจำตำบลมุ่งเน้นการพัฒนาเกษตรกรและชุมชนเกษตรกรรมให้มีความเข้มแข็งและยั่งยืน ครอบคลุมการส่งเสริมและพัฒนาเกษตรกร การถ่ายทอดความรู้และเทคโนโลยีที่เหมาะสม การบริหารจัดการข้อมูลการเกษตรในพื้นที่ การประสานงานเครือข่ายทุกภาคส่วน และการขับเคลื่อนนโยบายภาครัฐสู่การปฏิบัติจริงในระดับท้องถิ่น
        </p>
      </div>
      <MissionContent />
    </Section>
  );
};

export default MissionPage;