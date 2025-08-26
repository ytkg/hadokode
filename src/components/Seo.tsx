import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: SeoProps) => {
  const siteName = 'はどこで';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {/* <meta property="og:image" content={ogpImage} /> */}
      {/* <meta property="og:url" content={pageUrl} /> */}
    </Helmet>
  );
};

export default Seo;
