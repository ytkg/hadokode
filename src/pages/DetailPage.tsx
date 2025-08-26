import React from 'react';
import { useParams } from 'react-router-dom';
import mediaData from '../data/media.json';
import MediaItem from '../components/MediaItem';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import './DetailPage.css';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const media = mediaData.find(m => m.id === Number(id));

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
