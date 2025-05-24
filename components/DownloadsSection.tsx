
import React from 'react';
import { DownloadableItem } from '../types';
import { PdfIcon, DocxIcon, XlsxIcon, OtherFileIcon, DownloadIcon } from './icons/FileIcons';


const downloads: DownloadableItem[] = [
  { id: '1', name: 'คู่มือการใช้งานระบบ Farmbook V.3', type: 'PDF', url: '#', icon: <PdfIcon /> },
  { id: '2', name: 'แบบฟอร์มรายงานผลการปฏิบัติงาน (รายเดือน)', type: 'DOCX', url: '#', icon: <DocxIcon /> },
  { id: '3', name: 'ตารางสรุปข้อมูลผลผลิตทางการเกษตร', type: 'XLSX', url: '#', icon: <XlsxIcon /> },
  { id: '4', name: 'แนวทางการส่งเสริมเกษตรแปลงใหญ่', type: 'PDF', url: '#', icon: <PdfIcon /> },
  { id: '5', name: 'คู่มือการจัดตั้งกลุ่มวิสาหกิจชุมชน', type: 'PDF', url: '#', icon: <PdfIcon /> },
  { id: '6', name: 'แบบสำรวจความต้องการของเกษตรกร', type: 'DOCX', url: '#', icon: <DocxIcon /> },
];

export const DownloadsSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ul className="space-y-4">
        {downloads.map((item) => (
          <li key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between">
            <div className="flex items-center">
              {item.icon || <OtherFileIcon />}
              <span className="ml-4 text-brand-text text-lg">{item.name}</span>
              <span className="ml-2 text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{item.type}</span>
            </div>
            <a
              href={item.url}
              download // Note: For actual download, server needs to set Content-Disposition header
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-green-dark text-white px-4 py-2 rounded-md hover:bg-brand-green-darker transition-colors text-sm font-medium"
            >
              ดาวน์โหลด
              <DownloadIcon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
