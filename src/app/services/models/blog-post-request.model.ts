// src/app/services/models/blog-post-request.model.ts
export interface BlogPostRequest {
  title: string;
  content: string;
  imageUrl?: string;
  published: boolean;
}
