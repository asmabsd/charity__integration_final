// src/app/services/models/blog-post.model.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  published: boolean;
  authorName: string;
  publishedDate: string;
  createdDate: Date;
}
