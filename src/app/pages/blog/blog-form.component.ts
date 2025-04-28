// src/app/pages/blog/blog-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../services/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  imports: [FormsModule,
    ReactiveFormsModule,CommonModule
  ],
})
export class BlogFormComponent implements OnInit {
  form!: FormGroup;
  saving = false;
  editing = false;
  postId?: string;
  errorMsg?: string;

  constructor(
    private fb: FormBuilder,
    private svc: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
      published: [true]
    });

    this.postId = this.route.snapshot.paramMap.get('id')!;
    if (this.postId) {
      this.editing = true;
      this.svc.getById(this.postId).subscribe(p => this.form.patchValue(p));
    }
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.saving = true;
    const req = this.editing
      ? this.svc.update(this.postId!, this.form.value)
      : this.svc.create(this.form.value);

    req.subscribe({
      next: () => this.router.navigate(['/dashboard/blogs']),
      error: () => {
        this.errorMsg = 'Failed to save post.';
        this.saving = false;
      }
    });
  }
}
