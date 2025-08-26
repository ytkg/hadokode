import React from 'react';
import { Link } from 'react-router-dom';
import type { Media, VodService } from '../types';
import { formatMediaLinkTitle } from '../utils/stringUtils';
import './MediaCard.css';

interface MediaCardProps {
  media: Media;
  vodServiceMap: Map<string, VodService>;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, vodServiceMap }) => {
  return (
    <div className="home-media-card">
      <h3 className="home-media-title">
        <Link to={`/media/${media.id}`}>{formatMediaLinkTitle(media.title)}</Link>
      </h3>
      <div className="media-services">
        <strong>配信サービス:</strong>
        <div className="services-list">
          {media.services.map((serviceName, index) => {
            const service = vodServiceMap.get(serviceName);
            return service ? (
              <a
                key={index}
                href={service.url}
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
  );
};

export default MediaCard;
