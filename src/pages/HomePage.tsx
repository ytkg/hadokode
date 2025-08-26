import React from 'react';
import { Link } from 'react-router-dom';
import mediaData from '../data/media.json';
import Seo from '../components/Seo';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Seo
        title="ホーム"
        description="「あのドラマ、どこで観れる？」を解決。はどこでは、気になる国内ドラマがどの動画配信サービス（サブスク）で視聴可能か、すぐに見つけられるサイトです。"
      />
      <h2>国内ドラマ一覧</h2>
      <ul className="media-title-list">
        {mediaData.map(media => (
          <li key={media.id}>
            <Link to={`/media/${media.id}`}>{`『${media.title}』はどこで観れる？`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
