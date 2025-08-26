import React, { useState } from 'react';
import { useMediaData } from '../hooks/useMediaData';
import Seo from '../components/Seo';
import MediaCard from '../components/MediaCard';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { getAllMedia, vodServiceMap } = useMediaData();
  const allMedia = getAllMedia();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMedia = allMedia.filter(media =>
    media.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Seo
        title="ホーム"
        description="「あのドラマ、どこで観れる？」を解決。はどこでは、気になる国内ドラマがどの動画配信サービス（サブスク）で視聴可能か、すぐに見つけられるサイトです。"
      />
      <div className="search-container">
        <input
          type="text"
          placeholder="ドラマタイトルを検索"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="media-grid">
        {filteredMedia.map(media => (
          <MediaCard key={media.id} media={media} vodServiceMap={vodServiceMap} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
