import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: SeoProps) => {
  const siteName = 'はどこで';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  useEffect(() => {
    // Set the document title
    document.title = fullTitle;

    // Helper function to set or create a meta tag
    const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set standard meta tags
    setMetaTag('description', description);

    // Set Open Graph meta tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', siteName, true);

  }, [title, description, fullTitle, siteName]);

  return null; // This component does not render anything
};

export default Seo;
