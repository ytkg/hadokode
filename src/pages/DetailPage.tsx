import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaData } from '../hooks/useMediaData';
import MediaItem from '../components/MediaItem';
import Seo from '../components/Seo';
import './DetailPage.css';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getMediaById } = useMediaData();
  const media = getMediaById(Number(id));

  if (!media) {
    return <div>作品が見つかりません。</div>;
  }

  const description = `『${media.title}』の配信情報をチェック。`;

  return (
    <div className="detail-page">
      <Seo
        title={`『${media.title}』はどこで観れる？`}
        description={description}
      />
      <MediaItem media={media} />
      <Link to="/" className="back-link">トップに戻る</Link>
    </div>
  );
};

export default DetailPage;
