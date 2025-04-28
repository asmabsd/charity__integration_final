// src/app/pages/blog/blog-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/services/blog.service';
import { BlogPost } from '../../services/models/blog-post.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  imports: [CommonModule], // Add CommonModule
})
export class BlogDetailComponent implements OnInit {
  post?: BlogPost;
  safeContent?: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private svc: BlogService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.svc.getById(id).subscribe(p => {
      this.post = p;
      this.safeContent = this.sanitizer.bypassSecurityTrustHtml(p.content);
    });
  }
}
