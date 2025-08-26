import React from 'react';
import './MediaItem.css';
import type { Media } from '../types';

interface MediaItemProps {
  media: Media;
  isSummary?: boolean;
}

const MediaItem: React.FC<MediaItemProps> = ({ media, isSummary = false }) => {
  return (
    <div className="media-item">
      <div className="media-info">
        <h3 className="media-title">
          {isSummary ? media.title : `『${media.title}』はどこで観れる？`}
        </h3>
        {!isSummary && (
          <p className="media-description">{media.description}</p>
        )}
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
