import React from 'react';
import { useMediaData } from '../hooks/useMediaData';
import Seo from '../components/Seo';
import MediaCard from '../components/MediaCard';
import './HomePage.css';

interface HomePageProps {
  searchTerm: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchTerm }) => {
  const { getAllMedia, vodServiceMap } = useMediaData();
  const allMedia = getAllMedia();

  const filteredMedia = allMedia.filter(media =>
    media.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Seo
        title="ホーム"
        description="「あのドラマ、どこで観れる？」を解決。はどこでは、気になる国内ドラマがどの動画配信サービス（サブスク）で視聴可能か、すぐに見つけられるサイトです。"
      />
      <div className="media-grid">
        {filteredMedia.map(media => (
          <MediaCard key={media.id} media={media} vodServiceMap={vodServiceMap} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
