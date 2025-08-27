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
      <h1 className="media-title">{formatMediaLinkTitle(media.title)}</h1>
      <p className="media-description">{media.description}</p>
      <div className="media-services">
        <h2 className="services-heading">配信サービス</h2>
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
                <React.Fragment key={service.name}>
                  <tr>
                    <td>{service.name}</td>
                    <td>{service.fee}</td>
                    <td>
                      <a href={service.url} target="_blank" rel="noopener noreferrer">
                        公式サイト
                      </a>
                    </td>
                  </tr>
                  {service.otherDramas && service.otherDramas.length > 0 && (
                    <tr className="other-dramas-row">
                      <td colSpan={3}>
                        <div className="other-dramas-container">
                          <h3 className="other-dramas-heading">このサービスで観られる他の人気作品</h3>
                          <ul className="other-dramas-list">
                            {service.otherDramas.map((drama, index) => (
                              <li key={index}>{drama}</li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default MediaItem;
