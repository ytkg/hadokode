import React from 'react';
import MediaItem from './MediaItem';
import { Media } from '../types';
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
