import React from 'react';
import { Section } from '../components/Section';
import { DownloadsSection as DownloadsContent } from '../components/DownloadsSection';
import { PageKey } from '../types';

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const DownloadsPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <Section id="downloads-page" title="คู่มือและแบบฟอร์ม">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-brand-text leading-relaxed">
          ศูนย์รวมคู่มือการปฏิบัติงาน แบบฟอร์มเอกสารต่างๆ และเอกสารเผยแพร่ที่เป็นประโยชน์ต่อนักวิชาการส่งเสริมการเกษตรและเกษตรกร ท่านสามารถดาวน์โหลดไฟล์เหล่านี้เพื่อนำไปใช้งาน ประกอบการดำเนินงาน หรือศึกษาหาความรู้เพิ่มเติมได้ทันที
        </p>
      </div>
      <DownloadsContent />
    </Section>
  );
};

export default DownloadsPage;