import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mediaData from '../data/media.json';
import vodData from '../data/vod.json';
import Seo from '../components/Seo';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const serviceUrlMap: { [key: string]: string } = {};
  vodData.forEach(service => {
    serviceUrlMap[service.name] = service.url;
  });

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
          <div key={media.id} className="home-media-card">
            <h3 className="home-media-title">
              <Link to={`/media/${media.id}`}>{`『${media.title}』はどこで観れる？`}</Link>
            </h3>
            <div className="media-services">
              <strong>配信サービス:</strong>
              <div className="services-list">
                {media.services.map((serviceName, index) => {
                  const url = serviceUrlMap[serviceName];
                  return url ? (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-tag"
                    >
                      {serviceName}
                    </a>
                  ) : (
                    <span key={index} className="service-tag">{serviceName}</span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
