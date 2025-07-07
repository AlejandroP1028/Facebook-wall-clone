export interface Post {
  id: number;
  author: string;
  message: string;
  timestamp: Date;
  attachments?: File[];
}
