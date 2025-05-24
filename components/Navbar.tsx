import React, { useState } from 'react';
import { NavItem, PageKey } from '../types';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM5.53 8.2L12 12.22L18.47 8.2L12 4.18L5.53 8.2ZM4 15.92V9.13L11.25 13.4V19.5L4 15.92ZM12.75 19.5V13.4L20 9.13V15.92L12.75 19.5Z" />
  </svg>
);

interface NavbarProps {
  currentPath: PageKey;
  navigateTo: (page: PageKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'หน้าแรก', href: 'home' },
    { label: 'ภารกิจ', href: 'mission' },
    { label: 'เครื่องมือ', href: 'tools' },
    { label: 'ดาวน์โหลด', href: 'downloads' },
    { label: 'สื่อความรู้', href: 'media' },
    { label: 'เครือข่าย', href: 'network' },
    { label: 'ข่าวสาร', href: 'news' },
    { label: 'ติดต่อ', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: PageKey) => {
    e.preventDefault();
    navigateTo(href);
    setIsOpen(false); // Close menu on item click
  };

  return (
    <nav className="bg-brand-green-dark text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-white" />
            <span className="font-semibold text-xl">คลังความรู้เกษตรตำบล</span>
          </a>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPath === item.href ? 'bg-brand-green-darker' : 'hover:bg-brand-green-darker'
                }`}
                aria-current={currentPath === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-green-darker focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">เปิดเมนู</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPath === item.href ? 'bg-brand-green-darker' : 'hover:bg-brand-green-darker'
                }`}
                aria-current={currentPath === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};