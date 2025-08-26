/**
 * メディアのタイトルを受け取り、定型フォーマットのリンクラベルを生成します。
 * 例: "東京ラブストーリー" -> "『東京ラブストーリー』はどこで観れる？"
 * @param {string} title - メディアのタイトル
 * @returns {string} フォーマットされたリンクラベル
 */
export const formatMediaLinkTitle = (title: string): string => {
  return `『${title}』はどこで観れる？`;
};
