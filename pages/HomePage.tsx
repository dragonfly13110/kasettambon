import React, { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { PageKey, NewsArticleItem } from '../types';
import { KnowledgeIcon } from '../components/icons/MissionIcons';
import { OtherToolIcon } from '../components/icons/ToolIcons'; 
import { InfographicIconSolid } from '../components/icons/MediaIcons';
import newsData from '../src/data/newsData.json';

interface HomePageProps {
  navigateTo: (page: PageKey) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [previewNewsArticles, setPreviewNewsArticles] = useState<NewsArticleItem[]>([]);

  useEffect(() => {
    // Take the first 2 articles for preview, or fewer if not enough data
    setPreviewNewsArticles((newsData as NewsArticleItem[]).slice(0, 2));
  }, []);

  const keyFeatures = [
    {
      icon: <KnowledgeIcon className="w-16 h-16 text-brand-green-dark mb-4" />,
      title: 'ภารกิจของเรา',
      description: 'เข้าใจบทบาทและหน้าที่สำคัญของเกษตรตำบลในการขับเคลื่อนภาคการเกษตรไทย',
      pageKey: 'mission' as PageKey,
      buttonText: 'ดูรายละเอียดภารกิจ',
    },
    {
      icon: <OtherToolIcon className="w-16 h-16 text-brand-green-dark mb-4" />,
      title: 'เครื่องมือสนับสนุน',
      description: 'เข้าถึงระบบและเครื่องมือดิจิทัลที่ช่วยในการปฏิบัติงานและบริหารจัดการ',
      pageKey: 'tools' as PageKey,
      buttonText: 'สำรวจเครื่องมือ',
    },
    {
      icon: <InfographicIconSolid className="w-16 h-16 text-brand-green-dark mb-4" />,
      title: 'คลังสื่อความรู้',
      description: 'ค้นคว้าข้อมูล วิดีโอ และอินโฟกราฟิก เพื่อพัฒนาความรู้และทักษะด้านการเกษตร',
      pageKey: 'media' as PageKey,
      buttonText: 'ค้นหาสื่อความรู้',
    },
  ];

  return (
    <>
      <HeroSection navigateTo={navigateTo} />

      <Section id="key-features" title="สำรวจเนื้อหาหลัก" bgColor="bg-white">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {keyFeatures.map((feature) => (
            <div key={feature.pageKey} className="p-6 bg-brand-brown-light rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              {feature.icon}
              <h3 className="text-2xl font-semibold text-brand-green-darker mb-3">{feature.title}</h3>
              <p className="text-brand-text text-base mb-6 flex-grow">{feature.description}</p>
              <a
                href={`#${feature.pageKey}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(feature.pageKey);
                }}
                className="mt-auto inline-block bg-brand-green text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                {feature.buttonText}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="latest-news-preview" title="ข่าวสารล่าสุด" bgColor="bg-brand-brown-light">
        <div className="grid md:grid-cols-2 gap-8">
          {previewNewsArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              imageUrl={article.imageUrls && article.imageUrls.length > 0 ? article.imageUrls[0] : undefined}
              className="h-full" 
            >
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <p className="text-sm text-brand-brown-dark mb-2">{article.date}</p>
                <p className="text-brand-text text-base mb-4 line-clamp-3 flex-grow">{article.summary}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('news'); 
                  }}
                  className="mt-auto inline-block text-brand-green-dark hover:text-brand-green-darker font-medium transition-colors text-sm self-start"
                >
                  อ่านเพิ่มเติม &rarr;
                </button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <a
                href="#news"
                onClick={(e) => { e.preventDefault(); navigateTo('news'); }}
                className="inline-block bg-brand-green-dark text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-brand-green-darker transition-colors text-lg"
            >
                ดูข่าวสารทั้งหมด
            </a>
        </div>
      </Section>
    </>
  );
};

export default HomePage;