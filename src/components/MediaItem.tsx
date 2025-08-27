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

  const servicesWithOtherDramas = availableServices.filter(
    (service) => service.otherDramas && service.otherDramas.length > 0
  );

  return (
    <div className="media-item">
      <h1 className="media-title">{formatMediaLinkTitle(media.title)}</h1>
      <p className="media-description">{media.description}</p>

      <div className="media-services">
        <h2 className="services-heading">配信サービス</h2>
        <table className="services-table">
          <thead>
            <tr>
              <th>サービス名</th>
              <th>月額</th>
              <th>視聴する</th>
            </tr>
          </thead>
          <tbody>
            {availableServices.map((service) => (
              <tr key={service.name}>
                <td>
                  <a href={service.url} target="_blank" rel="noopener noreferrer" className="service-name-link">
                    {service.name}
                  </a>
                </td>
                <td>{service.fee}</td>
                <td>
                  <a href={service.url} target="_blank" rel="noopener noreferrer" className="service-link-button">
                    {service.name}で見る
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {servicesWithOtherDramas.length > 0 && (
        <div className="other-dramas-section">
          <h2 className="section-heading">各サービスの人気作品</h2>
          <div className="other-dramas-grid">
            {servicesWithOtherDramas.map((service) => (
              <div key={service.name} className="service-drama-card">
                <h3 className="service-name-heading">{service.name}ではこんな作品も</h3>
                <ul className="other-dramas-list">
                  {service.otherDramas?.map((drama, index) => (
                    <li key={index}>{drama}</li>
                  ))}
                </ul>
                <a href={service.url} target="_blank" rel="noopener noreferrer" className="service-link-button">
                  {service.name}で見る
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaItem;
