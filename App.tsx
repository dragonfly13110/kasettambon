import React, { useState, useCallback, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageKey } from './types';

import HomePage from './pages/HomePage';
import MissionPage from './pages/MissionPage';
import ToolsPage from './pages/ToolsPage';
import DownloadsPage from './pages/DownloadsPage';
import MediaPage from './pages/MediaPage';
import NetworkPage from './pages/NetworkPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');

  const navigateTo = useCallback((page: PageKey) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
    window.location.hash = page;
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageKey;
      if (hash && ['home', 'mission', 'tools', 'downloads', 'media', 'network', 'news', 'contact'].includes(hash)) {
        if (currentPage !== hash) {
          setCurrentPage(hash);
        }
      } else if (!hash && currentPage !== 'home') {
        // If hash is empty (e.g. base URL), go to home
        setCurrentPage('home');
      }
    };

    // Set initial page based on hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentPage]); // Add currentPage to dependencies to re-evaluate if it changes programmatically

  const renderPage = () => {
    switch (currentPage) {
      case 'mission':
        return <MissionPage navigateTo={navigateTo} />;
      case 'tools':
        return <ToolsPage navigateTo={navigateTo} />;
      case 'downloads':
        return <DownloadsPage navigateTo={navigateTo} />;
      case 'media':
        return <MediaPage navigateTo={navigateTo} />;
      case 'network':
        return <NetworkPage navigateTo={navigateTo} />;
      case 'news':
        return <NewsPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-brown-light text-brand-text font-sans flex flex-col">
      <Navbar currentPath={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;