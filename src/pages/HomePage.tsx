import React from 'react';
import { Link } from 'react-router-dom';
import mediaData from '../data/media.json';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h2>すべての作品</h2>
      <ul className="media-title-list">
        {mediaData.map(media => (
          <li key={media.id}>
            <Link to={`/media/${media.id}`}>{media.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
