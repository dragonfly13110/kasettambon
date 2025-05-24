import React from 'react';

interface CardProps {
  title: string;
  imageUrl?: string; // This will be the primary image for the card (e.g., thumbnail)
  linkUrl?: string;
  linkText?: string;
  children?: React.ReactNode; // Content like description, uploader info will go here
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, linkUrl, linkText = "อ่านเพิ่มเติม", children, className = "" }) => {
  const isExternalLink = linkUrl && (linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('//'));
  
  const LinkOrButtonContent = (
    <>
      {linkText} {linkUrl && !linkUrl.startsWith('#') && '→'}
    </>
  );

  const linkClasses = "mt-auto inline-block text-brand-green-dark hover:text-brand-green-darker font-medium transition-colors text-sm";

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col ${className}`}>
      {/* Image part is now part of children, handled by MediaDisplay */}
      {/* The Card itself does not render the primary image/video frame directly anymore if passed via children in MediaDisplay */}
      {/* However, if imageUrl is provided directly to Card, it could be used as a generic header image, but MediaDisplay handles specific media frame */}

      {/* FIX: Uncommented H3 to display the title prop. Children will be rendered after this. */}
      <div className="p-0 flex-grow flex flex-col"> {/* Changed p-6 to p-0 to allow children to control padding like MediaDisplay does */}
        {/* Title can be part of children if more complex layout needed, or use this default title rendering */}
        <h3 className="text-xl font-semibold text-brand-green-darker mb-2 px-6 pt-6">{title}</h3>
        
        {children}
        
        {linkUrl && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 mt-2"> {/* Added padding for the link */}
            {linkUrl.startsWith('#') && !linkUrl.includes('uploaded-') ? ( // Internal page navigation
              <a
                href={linkUrl}
                onClick={(e) => {
                  // SPA navigation should be handled by the parent component if it's an internal link
                  // For Card, we assume if it's a hash link, it might be handled by parent or default browser behavior
                  // If a specific SPA navigate function needs to be called, it should be passed in or handled by parent wrapping this.
                }}
                className={linkClasses}
              >
                {LinkOrButtonContent}
              </a>
            ) : ( // External link or data URL for download/view
              <a
                href={linkUrl}
                target={isExternalLink || linkUrl.startsWith('data:') ? "_blank" : "_self"}
                rel={isExternalLink || linkUrl.startsWith('data:') ? "noopener noreferrer" : ""}
                download={linkUrl.startsWith('data:') && (linkUrl.includes('application/pdf') || linkUrl.includes('image/')) && !linkText?.toLowerCase().includes('ชม') && !linkText?.toLowerCase().includes('ดู') ? (title.replace(/[^a-zA-Z0-9]/g, '_') + (linkUrl.includes('pdf') ? '.pdf' : '.png')) : undefined }
                className={linkClasses}
              >
                {LinkOrButtonContent}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};