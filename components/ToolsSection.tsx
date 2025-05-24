

import React from 'react';
import { ToolItem } from '../types';
import { Card } from './Card';
import { FarmbookIcon, SmartReportIcon, OtherToolIcon } from './icons/ToolIcons';

const tools: ToolItem[] = [
  {
    id: '1',
    name: 'Farmbook (สมุดทะเบียนเกษตรกร)',
    description: 'ระบบทะเบียนเกษตรกรดิจิทัลสำหรับบันทึกและจัดการข้อมูลเกษตรกรและแปลงเพาะปลูก',
    imageUrl: 'placeholder_farmbook_icon', // Placeholder, actual icon component is used
    link: '#', // Mock link
  },
  {
    id: '2',
    name: 'Smart Report (ระบบรายงานอัจฉริยะ)',
    description: 'เครื่องมือสำหรับการรายงานผลการดำเนินงานและติดตามความก้าวหน้าของโครงการต่างๆ',
    imageUrl: 'placeholder_smartreport_icon', // Placeholder
    link: '#', // Mock link
  },
  {
    id: '3',
    name: 'ระบบสารสนเทศเพื่อการส่งเสริมการเกษตร',
    description: 'รวมระบบข้อมูลและสารสนเทศต่างๆ ที่สนับสนุนการตัดสินใจและการวางแผนงาน',
    imageUrl: 'placeholder_infotech_icon', // Placeholder
    link: '#', // Mock link
  },
];

const toolIcons: { [key: string]: React.ReactNode } = {
  'placeholder_farmbook_icon': <FarmbookIcon />,
  'placeholder_smartreport_icon': <SmartReportIcon />,
  'placeholder_infotech_icon': <OtherToolIcon />,
};


export const ToolsSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool) => (
        // FIX: Removed incorrect 'description' prop. Description is now part of children.
        // Added padding to children elements for consistent layout.
        <Card
          key={tool.id}
          title={tool.name}
          linkUrl={tool.link}
          linkText="เข้าสู่ระบบ (ตัวอย่าง)"
        >
          {/* Icon and Description are children */}
          {tool.imageUrl && toolIcons[tool.imageUrl] && (
            <div className="mb-4 px-6"> {/* Add horizontal padding consistent with title */}
              {toolIcons[tool.imageUrl]}
            </div>
          )}
          <p className="text-brand-text text-base px-6 pb-4">{tool.description}</p> {/* Add padding */}
        </Card>
      ))}
    </div>
  );
};