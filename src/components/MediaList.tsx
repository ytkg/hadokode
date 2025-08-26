import React from 'react';
import MediaItem, { Media } from './MediaItem';
import mediaData from '../data/media.json';
import './MediaList.css';

const MediaList: React.FC = () => {
  return (
    <div className="media-list">
      {mediaData.map((media: Media) => (
        <MediaItem key={media.id} media={media} />
      ))}
    </div>
  );
};

export default MediaList;
