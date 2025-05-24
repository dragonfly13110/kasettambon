
import React from 'react';
import { MissionItem } from '../types';
import { FarmerIcon, KnowledgeIcon, DataIcon, NetworkIconMission, PolicyIcon } from './icons/MissionIcons';

const missions: MissionItem[] = [
  {
    id: '1',
    title: 'ส่งเสริมและพัฒนาเกษตรกร',
    description: 'ส่งเสริม สนับสนุน และพัฒนาเกษตรกร องค์กรเกษตรกร และวิสาหกิจชุมชนให้มีความเข้มแข็งและยั่งยืน',
    icon: <FarmerIcon />,
  },
  {
    id: '2',
    title: 'ถ่ายทอดความรู้และเทคโนโลยี',
    description: 'ถ่ายทอดองค์ความรู้ เทคโนโลยี นวัตกรรมการเกษตรที่เหมาะสมสู่เกษตรกรและชุมชน',
    icon: <KnowledgeIcon />,
  },
  {
    id: '3',
    title: 'บริหารจัดการข้อมูลการเกษตร',
    description: 'รวบรวม วิเคราะห์ และบริหารจัดการข้อมูลการเกษตรในพื้นที่เพื่อการวางแผนและตัดสินใจ',
    icon: <DataIcon />,
  },
  {
    id: '4',
    title: 'ประสานงานเครือข่าย',
    description: 'สร้างและประสานความร่วมมือกับหน่วยงานภาคีเครือข่ายทั้งภาครัฐ เอกชน และชุมชน',
    icon: <NetworkIconMission />,
  },
  {
    id: '5',
    title: 'ขับเคลื่อนนโยบายภาครัฐ',
    description: 'ดำเนินการตามนโยบาย โครงการ และมาตรการส่งเสริมการเกษตรของภาครัฐในระดับพื้นที่',
    icon: <PolicyIcon />,
  },
];

export const MissionSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {missions.map((mission, index) => (
        <div 
          key={mission.id} 
          className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${index >= 3 && index < 5 && missions.length === 5 ? 'lg:col-start-2 lg:col-span-1' : ''} 
                     ${index === 3 && missions.length === 5 ? 'lg:col-start-auto md:col-start-auto' : ''}
                     ${index === 4 && missions.length === 5 ? 'lg:col-start-auto md:col-start-auto lg:translate-x-1/2 md:translate-x-0 lg:col-span-1 ' : ''}
                     ${missions.length === 5 && index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 ' : ''}
                     ${missions.length === 5 && index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-auto lg:mx-auto' : ''}
                     `
                    }
        >
          <div className="flex items-center mb-4">
            {mission.icon}
            <h3 className="ml-4 text-xl font-semibold text-brand-green-darker">{mission.title}</h3>
          </div>
          <p className="text-brand-text text-base">{mission.description}</p>
        </div>
      ))}
    </div>
  );
};
