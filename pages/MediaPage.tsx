
import React, { useState } from 'react';
import { Section } from '../components/Section';
import { MediaDisplay } from '../components/MediaDisplay';
import { PageKey, MediaContentItem, MediaType } from '../types';
import { Modal } from '../components/Modal'; 
import { DocumentIconSolid, ImageIcon, InfographicIconSolid, VideoPlayIcon, UploadFileIcon } from '../components/icons/MediaIcons'; // UploadFileIcon might still be useful for the button

// Initial static data - can be expanded or moved to a JSON file later
const initialMediaItems: MediaContentItem[] = [
  { id: '1', title: 'วิดีโอ: การปลูกข้าวอินทรีย์แบบครบวงจร', type: MediaType.Video, thumbnailUrl: 'https://picsum.photos/seed/video1/400/300', url: 'https://www.youtube.com/watch?v=example1', description: 'เรียนรู้ขั้นตอนการปลูกข้าวอินทรีย์ตั้งแต่การเตรียมดินจนถึงการเก็บเกี่ยว', uploadDate: '10/07/2567', uploaderName: 'ศูนย์เรียนรู้ ก.', uploaderLocation: 'เชียงใหม่' },
  { id: '2', title: 'อินโฟกราฟิก: 5 ขั้นตอนการทำปุ๋ยหมักชีวภาพ', type: MediaType.Infographic, thumbnailUrl: 'https://picsum.photos/seed/infograph1/400/300', url: 'https://picsum.photos/seed/infograph1_full/800/1200', description: 'สรุปขั้นตอนการทำปุ๋ยหมักชีวภาพง่ายๆ ใช้ได้ผลจริง' },
  { id: '3', title: 'เอกสาร: โรคและแมลงศัตรูพืชสำคัญในนาข้าว', type: MediaType.Document, thumbnailUrl: 'https://picsum.photos/seed/doc1/400/300', url: 'https://www.doae.go.th/sites/default/files/2024-07/rice-pest-management.pdf', description: 'คู่มือการวินิจฉัยและป้องกันโรคและแมลงศัตรูพืชในนาข้าว' },
  { id: '4', title: 'วิดีโอ: เทคนิคการเลี้ยงปลาในบ่อดิน', type: MediaType.Video, thumbnailUrl: 'https://picsum.photos/seed/video2/400/300', url: 'https://www.youtube.com/watch?v=example2', description: 'แนะนำเทคนิคการเลี้ยงปลาในบ่อดินให้ได้ผลผลิตสูง' },
  { id: '5', title: 'รูปภาพ: แปลงเกษตรผสมผสานตัวอย่าง', type: MediaType.Image, thumbnailUrl: 'https://picsum.photos/seed/image1/400/300', url: 'https://picsum.photos/seed/image1_full/800/600', description: 'ภาพตัวอย่างแปลงเกษตรผสมผสานตามหลักปรัชญาเศรษฐกิจพอเพียง', uploadDate: '12/07/2567', uploaderName: 'เกษตรกรตัวอย่าง ข.', uploaderLocation: 'สุพรรณบุรี' },
  { id: '6', title: 'เอกสาร: มาตรฐาน GAP สำหรับพืชผัก', type: MediaType.Document, thumbnailUrl: 'https://picsum.photos/seed/doc2/400/300', url: 'https://www.doae.go.th/sites/default/files/2024-07/vegetable-gap-standard.pdf', description: 'สรุปข้อกำหนดและแนวทางการปฏิบัติเพื่อให้ได้มาตรฐาน GAP' },
];

const EXTERNAL_FORM_URL = "https://forms.office.com/r/GBYWhKCi3a";

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const MediaPage: React.FC<PageProps> = ({ navigateTo }) => {
  const [mediaItemsList, setMediaItemsList] = useState<MediaContentItem[]>(initialMediaItems);
  const [activeTab, setActiveTab] = useState<MediaType | 'ทั้งหมด'>('ทั้งหมด');
  const [modalContent, setModalContent] = useState<MediaContentItem | null>(null);

  const handleOpenModal = (item: MediaContentItem) => {
    if (item.type !== MediaType.Video) { // Videos usually link out, others open in modal
      setModalContent(item);
    } else {
      // For videos, directly open the URL in a new tab if it's an external link
      if (item.url && (item.url.startsWith('http') || item.url.startsWith('//'))) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const filteredItems = activeTab === 'ทั้งหมด' ? mediaItemsList : mediaItemsList.filter(item => item.type === activeTab);

  const tabs: { label: string, type: MediaType | 'ทั้งหมด' }[] = [
    { label: 'ทั้งหมด', type: 'ทั้งหมด' },
    { label: 'วิดีโอ', type: MediaType.Video },
    { label: 'อินโฟกราฟิก', type: MediaType.Infographic },
    { label: 'เอกสาร PDF', type: MediaType.Document },
    { label: 'รูปภาพ', type: MediaType.Image },
  ];

  return (
    <>
      <Section id="media-page-content" title="คลังสื่อความรู้" bgColor="bg-white">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <p className="text-lg text-brand-text leading-relaxed">
            แหล่งรวบรวมสื่อการเรียนรู้หลากหลายรูปแบบ ทั้งวิดีโอ อินโฟกราฟิก เอกสาร และรูปภาพ ที่เกี่ยวข้องกับการเกษตร เทคโนโลยี นวัตกรรม และแนวทางการปฏิบัติที่ดี ค้นหาและเลือกชมสื่อที่สนใจเพื่อการศึกษาและนำไปปรับใช้ในการพัฒนาการเกษตรของท่าน
          </p>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabs.map(tab => (
            <button
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                activeTab === tab.type 
                  ? 'bg-brand-green-dark text-white' 
                  : 'bg-white text-brand-green-dark hover:bg-brand-green-light ring-1 ring-brand-green-dark'
              }`}
              aria-pressed={activeTab === tab.type}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <MediaDisplay items={filteredItems} onOpenModal={handleOpenModal} />
      </Section>

      <Section id="media-suggestion" title="ร่วมแบ่งปันสื่อความรู้" bgColor="bg-brand-brown-light">
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl text-center">
          <UploadFileIcon className="w-16 h-16 text-brand-green-dark mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-brand-green-darker mb-3">มีสื่อดีๆ อยากแบ่งปัน?</h3>
          <p className="text-brand-text mb-8 text-lg leading-relaxed">
            หากคุณมีสื่อความรู้ที่เป็นประโยชน์ เช่น วิดีโอ, บทความ, อินโฟกราฟิก หรือแหล่งข้อมูลอื่นๆ ที่เกี่ยวข้องกับการเกษตร
            และต้องการแบ่งปันให้เพื่อนนักวิชาการและเกษตรกรท่านอื่นได้รับทราบ กรุณาคลิกปุ่มด้านล่างนี้เพื่อกรอกแบบฟอร์มแนะนำสื่อ
            ทีมงานจะทำการตรวจสอบและพิจารณานำเข้าคลังความรู้ต่อไป
          </p>
          <a
            href={EXTERNAL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-md text-white bg-brand-green-dark hover:bg-brand-green-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark transition-colors"
            aria-label="แนะนำสื่อความรู้ผ่านแบบฟอร์มออนไลน์ (เปิดในหน้าต่างใหม่)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            คลิกที่นี่เพื่อแนะนำสื่อ
          </a>
           <p className="text-xs text-gray-500 mt-8">
            การคลิกปุ่มนี้จะนำท่านไปยังแบบฟอร์มภายนอก (Microsoft Forms) เพื่อกรอกรายละเอียด
          </p>
        </div>
      </Section>

      {modalContent && (
        <Modal isOpen={!!modalContent} onClose={handleCloseModal} title={modalContent.title}>
          {modalContent.type === MediaType.Image || modalContent.type === MediaType.Infographic ? (
            <img src={modalContent.url} alt={modalContent.title} className="max-w-full max-h-[80vh] mx-auto rounded-md" />
          ) : modalContent.type === MediaType.Document ? (
            <div className="text-center p-4">
              {modalContent.description && <p className="mb-6 text-brand-text">{modalContent.description}</p>}
              <a 
                href={modalContent.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-green hover:bg-brand-green-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark"
              >
                <DocumentIconSolid className="w-5 h-5 mr-2" />
                ดู/ดาวน์โหลดเอกสาร PDF
              </a>
            </div>
          ) : null}
        </Modal>
      )}
    </>
  );
};

export default MediaPage;
