import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { NewsSection as NewsList } from '../components/NewsSection'; // Renamed for clarity
import { PageKey, NewsArticleItem } from '../types';
import newsArticlesData from '../src/data/newsData.json';

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const NewsPage: React.FC<PageProps> = ({ navigateTo }) => {
  const [newsArticles, setNewsArticles] = useState<NewsArticleItem[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticleItem | null>(null);

  useEffect(() => {
    setNewsArticles(newsArticlesData as NewsArticleItem[]);
  }, []);

  const handleSelectArticle = (articleId: string) => {
    const article = newsArticles.find(art => art.id === articleId);
    if (article) {
      setSelectedArticle(article);
      window.scrollTo(0, 0); // Scroll to top when viewing an article
    }
  };

  const handleReturnToList = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0); // Scroll to top when returning to list
  };

  if (selectedArticle) {
    // View for a single selected article
    return (
      <Section id={`news-article-${selectedArticle.id}`} title={selectedArticle.title} bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-sm text-brand-brown-dark mb-2">{selectedArticle.date}</p>
          </div>
          
          {selectedArticle.imageUrls && selectedArticle.imageUrls.length > 0 && (
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedArticle.imageUrls.map((imgUrl, index) => (
                <img 
                  key={index} 
                  src={imgUrl} 
                  alt={`${selectedArticle.title} - รูปภาพ ${index + 1}`} 
                  className="rounded-lg shadow-md w-full h-auto object-cover" 
                />
              ))}
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none text-brand-text leading-relaxed whitespace-pre-line"
          >
            {selectedArticle.fullContent}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleReturnToList}
              className="inline-block bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-brand-green-darker transition-colors text-lg"
            >
              &larr; กลับไปหน้ารายการข่าว
            </button>
          </div>
        </div>
      </Section>
    );
  }

  // View for the list of all news articles
  return (
    <Section id="news-page-list" title="ข่าวสารจากกรมส่งเสริมการเกษตร" bgColor="bg-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg text-brand-text leading-relaxed">
          ติดตามข่าวสารความเคลื่อนไหวล่าสุดจากกรมส่งเสริมการเกษตร ทั้งประกาศสำคัญ นโยบายใหม่ โครงการที่น่าสนใจ และกิจกรรมต่างๆ ที่เกี่ยวข้องกับการพัฒนาภาคการเกษตรของประเทศไทย เพื่อให้ท่านไม่พลาดข้อมูลที่เป็นประโยชน์
        </p>
      </div>
      {newsArticles.length > 0 ? (
        <NewsList articles={newsArticles} onArticleSelect={handleSelectArticle} />
      ) : (
        <p className="text-center text-brand-text">กำลังโหลดข้อมูลข่าวสาร...</p>
      )}
    </Section>
  );
};

export default NewsPage;