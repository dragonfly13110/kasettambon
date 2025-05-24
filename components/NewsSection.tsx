import React from 'react';
import { NewsArticleItem } from '../types';
import { Card } from './Card';

interface NewsSectionProps {
  articles: NewsArticleItem[];
  onArticleSelect: (articleId: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ articles, onArticleSelect }) => {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-brand-text">ไม่พบข่าวสารในขณะนี้</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          imageUrl={article.imageUrls && article.imageUrls.length > 0 ? article.imageUrls[0] : undefined}
          // Link behavior is now handled by onArticleSelect, so linkUrl is not strictly needed for card action
          // However, Card component might still use linkUrl for other purposes if defined.
          // We want the action to be selecting the article.
        >
          <div className="p-4 sm:p-6 flex-grow flex flex-col"> {/* Ensure padding is here */}
            <p className="text-sm text-brand-brown-dark mb-2">{article.date}</p>
            <p className="text-brand-text text-base mb-4 line-clamp-3 flex-grow">{article.summary}</p>
            <button
              onClick={() => onArticleSelect(article.id)}
              className="mt-auto inline-block text-brand-green-dark hover:text-brand-green-darker font-medium transition-colors text-sm self-start"
            >
              อ่านข่าวเต็ม &rarr;
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};