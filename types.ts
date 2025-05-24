export type PageKey = 'home' | 'mission' | 'tools' | 'downloads' | 'media' | 'network' | 'news' | 'contact';

export interface NavItem {
  label: string;
  href: PageKey;
}

export interface MissionItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export interface DownloadableItem {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX' | 'XLSX' | 'อื่นๆ';
  url: string; // Mock URL
  icon?: React.ReactNode;
}

export enum MediaType {
  Video = 'วิดีโอ',
  Infographic = 'อินโฟกราฟิก',
  Document = 'เอกสาร PDF',
  Image = 'รูปภาพ',
}

export interface MediaContentItem {
  id: string;
  title: string;
  type: MediaType;
  thumbnailUrl: string;
  url: string; 
  description?: string;
  uploaderName?: string;
  uploaderLocation?: string;
  uploadDate?: string;
  file?: File; // Optional: to store the original file object
}

export interface NewsArticleItem {
  id: string;
  title: string;
  summary: string; // For list view
  date: string;
  imageUrls: string[]; // Array of image URLs
  fullContent: string; // Full content of the article
}