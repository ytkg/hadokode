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
    <Link to={`/media/${media.id}`} className="home-media-card-link">
      <div className="home-media-card">
        <div className="home-media-card-body">
          <h3 className="home-media-title">{formatMediaLinkTitle(media.title)}</h3>
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
      </div>
    </Link>
  );
};

export default MediaCard;
