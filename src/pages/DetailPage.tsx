import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mediaData from '../data/media.json';
import MediaItem from '../components/MediaItem';
import { Link } from 'react-router-dom';
import './DetailPage.css';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const media = mediaData.find(m => m.id === Number(id));

  useEffect(() => {
    if (media) {
      document.title = `『${media.title}』はどこで観れる？`;
    }
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'はどこで';
    };
  }, [media]);

  if (!media) {
    return <div>作品が見つかりません。</div>;
  }

  return (
    <div className="detail-page">
      <MediaItem media={media} />
      <Link to="/" className="back-link">トップに戻る</Link>
    </div>
  );
};

export default DetailPage;
