
import React from 'react';
import { MediaContentItem, MediaType } from '../types';
import { Card } from './Card';
import { VideoPlayIcon, InfographicIconSolid, DocumentIconSolid, ImageIcon } from './icons/MediaIcons';

interface MediaDisplayProps {
  items: MediaContentItem[];
  onOpenModal: (item: MediaContentItem) => void; // New prop
}

const mediaTypeIcons: { [key in MediaType]: React.ReactElement<{ className?: string }> } = {
  [MediaType.Video]: <VideoPlayIcon />,
  [MediaType.Infographic]: <InfographicIconSolid />,
  [MediaType.Document]: <DocumentIconSolid />,
  [MediaType.Image]: <ImageIcon />,
};

export const MediaDisplay: React.FC<MediaDisplayProps> = ({ items, onOpenModal }) => {
  if (!items || items.length === 0) {
    return <p className="text-center text-brand-text">ไม่พบสื่อที่ตรงกับเกณฑ์การค้นหา</p>;
  }
  
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => {
        const isModalTrigger = item.type === MediaType.Image || item.type === MediaType.Infographic || item.type === MediaType.Document;
        return (
          <Card 
              key={item.id} 
              title={item.title} 
              imageUrl={item.thumbnailUrl} 
              linkUrl={item.url}
              linkText={item.type === MediaType.Document || item.type === MediaType.Image ? `ดู/ดาวน์โหลด ${item.type}` : `ชม${item.type}`}
              className="flex flex-col"
          >
            <div 
              className={`relative group aspect-video bg-gray-200 overflow-hidden ${isModalTrigger ? 'cursor-pointer' : ''}`}
              onClick={isModalTrigger ? () => onOpenModal(item) : undefined}
              role={isModalTrigger ? "button" : undefined}
              tabIndex={isModalTrigger ? 0 : undefined}
              onKeyDown={isModalTrigger ? (e) => { if (e.key === 'Enter' || e.key === ' ') onOpenModal(item); } : undefined}
              aria-label={isModalTrigger ? `เปิด ${item.title}` : undefined}
            >
              <img 
                src={item.thumbnailUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 flex items-center justify-center transition-opacity">
                {React.cloneElement(mediaTypeIcons[item.type], { 
                  className: `w-12 h-12 sm:w-14 sm:h-14 text-white opacity-70 group-hover:opacity-90 transition-opacity`
                })}
              </div>
            </div>
            <div className="p-4 sm:p-6 flex-grow flex flex-col">
              {item.description && <p className="text-brand-text text-sm mb-3 line-clamp-3 flex-grow">{item.description}</p>}
              
              {(item.uploaderName || item.uploadDate) && (
                <div className="mt-auto pt-3 border-t border-gray-200 text-xs text-brand-brown-darker">
                  {item.uploaderName && (
                    <p>
                      อัปโหลดโดย: {item.uploaderName}
                      {item.uploaderLocation && ` (${item.uploaderLocation})`}
                    </p>
                  )}
                  {item.uploadDate && <p>วันที่: {item.uploadDate}</p>}
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
