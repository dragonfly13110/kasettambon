import React from 'react';

export const VideoPlayIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.625 3.248A1.125 1.125 0 019 15.248V8.752a1.125 1.125 0 011.65-.983l5.625 3.248z" clipRule="evenodd" />
  </svg>
);

export const InfographicIconSolid: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.423-.474l-1.171-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zM6 16.5a1.5 1.5 0 01-1.5-1.5V3.75h15V15a1.5 1.5 0 01-1.5 1.5H6zM7.5 12a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zM8.25 7.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM9.75 9.75A.75.75 0 009 10.5h4.5a.75.75 0 000-1.5H9.75z" clipRule="evenodd" />
  </svg>
);

export const DocumentIconSolid: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.625 1.5H9a2.25 2.25 0 012.25 2.25v1.875c0 .207.168.375.375.375H13.5a.75.75 0 01.75.75v1.5H9.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-4.125c0-.207.168-.375.375.375h1.875A2.25 2.25 0 0119.5 15V9.75M8.25 1.5h-1.5A2.25 2.25 0 004.5 3.75v16.5A2.25 2.25 0 006.75 22.5h10.5A2.25 2.25 0 0019.5 20.25V12a2.25 2.25 0 00-2.25-2.25H15a.75.75 0 01-.75-.75V7.5a.75.75 0 00-.75-.75h-1.5A2.25 2.25 0 009.75 4.5V1.5z" clipRule="evenodd" />
  </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
  </svg>
);

export const UploadFileIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 3.75 3.75 0 013.75 3.75m-13.5 3H12" />
  </svg>
);