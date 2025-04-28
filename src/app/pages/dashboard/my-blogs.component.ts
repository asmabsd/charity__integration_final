// src/app/pages/dashboard/my-blogs.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/services/blog.service';
import { BlogPost } from '../../services/models/blog-post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  imports:[CommonModule]
})
export class MyBlogsComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private svc: BlogService, private router: Router) {}

  ngOnInit() {
    this.svc.getMine().subscribe(list => this.posts = list);
  }

  navigateToNewPost() {
    this.router.navigate(['dashboard/blogs/new']);
  }

  navigateToEditPost(id: string) {
    this.router.navigate(['dashboard/blogs', id, 'edit']);
  }

  delete(p: BlogPost) {
    if (!confirm('Delete this post?')) return;
    this.svc.delete(p.id).subscribe(() =>
      this.posts = this.posts.filter(x => x.id !== p.id)
    );
  }
}
