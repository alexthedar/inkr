export type ContentType = 'tweet' | 'post' | 'article';

export interface ContentItem {
  id: string; // UUID or timestamp-based
  type: ContentType;
  text: string;
  createdAt: string; // ISO timestamp
  updatedAt?: string;
  mediaUri?: string; // optional local file path or URI
}
