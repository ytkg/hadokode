import { useMemo } from 'react';
import mediaRaw from '../data/media.jsonl?raw';
import vodData from '../data/vod.json';
import type { Media, VodService } from '../types';

// VODサービス名をキーにしたマップを作成（初回の一度だけ計算される）
const vodServiceMap = new Map<string, VodService>(
  vodData.map(service => [service.name, service])
);

/**
 * メディアとVODサービスに関するデータを取得・操作するためのカスタムフック
 */
export const useMediaData = () => {
  // JSONLをパースしてMedia配列を生成（ビルド時に一度だけ評価）
  const mediaData: Media[] = mediaRaw
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line) as Media);

  /**
   * すべてのメディアデータを取得します。
   * @returns {Media[]} すべてのメディアの配列
   */
  const getAllMedia = () => mediaData;

  /**
   * 指定されたIDのメディアデータを取得します。
   * @param {number} id - 検索するメディアのID
   * @returns {Media | undefined} 見つかったメディアデータ、またはundefined
   */
  const getMediaById = (id: number): Media | undefined => {
    return mediaData.find(m => m.id === id);
  };

  /**
   * 指定されたメディアが利用可能なVODサービスのリストを取得します。
   * @param {Media} media - VODサービスを検索するメディアオブジェクト
   * @returns {VodService[]} 利用可能なVODサービスの配列
   */
  const getAvailableServicesForMedia = (media: Media): VodService[] => {
    return media.services
      .map(serviceName => vodServiceMap.get(serviceName))
      .filter((service): service is VodService => service !== undefined);
  };

  // useMemoを使って、これらの関数がコンポーネントの再レンダリングで再生成されないようにする
  return useMemo(() => ({
    vodServiceMap, // マップを直接公開する
    getAllMedia,
    getMediaById,
    getAvailableServicesForMedia,
  }), []);
};
