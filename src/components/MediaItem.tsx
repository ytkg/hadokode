import React from 'react';
import './MediaItem.css';
import type { Media } from '../types';

interface MediaItemProps {
  media: Media;
}

const MediaItem: React.FC<MediaItemProps> = ({ media }) => {
  return (
    <div className="media-item">
      <img src={media.imageUrl} alt={media.title} className="media-image" />
      <div className="media-info">
        <h3 className="media-title">{media.title}</h3>
        <p className="media-description">{media.description}</p>
        <div className="media-services">
          <strong>配信サービス:</strong>
          <div className="services-list">
            {media.services.map((service, index) => (
              <span key={index} className="service-tag">{service}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
