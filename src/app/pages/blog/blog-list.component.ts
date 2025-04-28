import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/services/blog.service';
import { BlogPost } from '../../services/models/blog-post.model';
import { BlogPostRequest } from '../../services/models/blog-post-request.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];

  newPost: BlogPostRequest = {
    title: '',
    content: '',
    imageUrl: '',
    published: true,
  };
  isPosting = false;
  newlyPostedId: string | null = null;
  constructor(private svc: BlogService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.svc.getAll().subscribe((list) => (this.posts = list.reverse())); // newest first
  }

  submitPost() {
    if (!this.newPost.title?.trim()) return;

    this.svc.create(this.newPost).subscribe(() => {
      this.newPost = { title: '', content: '', imageUrl: '', published: true };
      this.loadPosts();
    });
  }
}
