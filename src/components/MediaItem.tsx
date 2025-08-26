import React from 'react';
import './MediaItem.css';
import type { Media } from '../types';
import { useMediaData } from '../hooks/useMediaData';
import { formatMediaLinkTitle } from '../utils/stringUtils';

interface MediaItemProps {
  media: Media;
}

const MediaItem: React.FC<MediaItemProps> = ({ media }) => {
  const { getAvailableServicesForMedia } = useMediaData();
  const availableServices = getAvailableServicesForMedia(media);

  return (
    <div className="media-item">
      <div className="media-info">
        <h3 className="media-title">{formatMediaLinkTitle(media.title)}</h3>
        <p className="media-description">{media.description}</p>
        <div className="media-services">
          <strong>配信サービス:</strong>
          <table className="services-table">
            <thead>
              <tr>
                <th>サービス名</th>
                <th>月額</th>
                <th>公式サイト</th>
              </tr>
            </thead>
            <tbody>
              {availableServices.map((service) => (
                <tr key={service.name}>
                  <td>{service.name}</td>
                  <td>{service.fee}</td>
                  <td>
                    <a href={service.url} target="_blank" rel="noopener noreferrer">
                      公式サイト
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
