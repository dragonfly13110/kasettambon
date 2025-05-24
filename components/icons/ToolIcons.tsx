
import React from 'react';

export const FarmbookIcon: React.FC<{ className?: string }> = ({ className = "w-full h-32 text-brand-green object-contain p-4" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6ZM6 4H18V8H6V4ZM8 10H16V11H8V10ZM8 13H16V14H8V13ZM8 16H13V17H8V16Z" />
</svg>
);

export const SmartReportIcon: React.FC<{ className?: string }> = ({ className = "w-full h-32 text-brand-green object-contain p-4" }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2ZM13 9V3.5L18.5 9H13ZM8 12H16V13H8V12ZM8 15H16V16H8V15ZM8 18H12V19H8V18Z" />
</svg>
);

export const OtherToolIcon: React.FC<{ className?: string }> = ({ className = "w-full h-32 text-brand-green object-contain p-4" }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11 7H13V11H17V13H13V17H11V13H7V11H11V7Z"/>
</svg>
);

