import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mediaData from '../data/media.json';
import Seo from '../components/Seo';
import MediaItem from '../components/MediaItem';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMedia = mediaData.filter(media =>
    media.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Seo
        title="ホーム"
        description="「あのドラマ、どこで観れる？」を解決。はどこでは、気になる国内ドラマがどの動画配信サービス（サブスク）で視聴可能か、すぐに見つけられるサイトです。"
      />
      <h2>国内ドラマ一覧</h2>
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
          <Link to={`/media/${media.id}`} key={media.id} className="media-card-link">
            <MediaItem media={media} isSummary={true} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
