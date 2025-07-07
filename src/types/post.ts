export interface Post {
  id: number;
  author: string;
  message: string;
  created_at: Date;
  attachments?: File[];
}
