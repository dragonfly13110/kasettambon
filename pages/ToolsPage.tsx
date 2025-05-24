import React from 'react';
import { Section } from '../components/Section';
import { ToolsSection as ToolsContent } from '../components/ToolsSection';
import { PageKey } from '../types';

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const ToolsPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <Section id="tools-page" title="เครื่องมือและระบบสนับสนุน" bgColor="bg-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-brand-text leading-relaxed">
          รวบรวมเครื่องมือและระบบสารสนเทศที่สำคัญ เพื่อสนับสนุนการปฏิบัติงานของเกษตรตำบลให้มีประสิทธิภาพยิ่งขึ้น เกษตรกรสามารถเข้าถึงข้อมูล ข่าวสาร และบริการต่างๆ ได้อย่างสะดวก รวดเร็ว ผ่านระบบดิจิทัลที่ทันสมัย ช่วยในการตัดสินใจ วางแผน และบริหารจัดการฟาร์มได้อย่างมีประสิทธิภาพ
        </p>
      </div>
      <ToolsContent />
    </Section>
  );
};

export default ToolsPage;