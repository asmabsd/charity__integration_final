// src/app/pages/blog/blog.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list.component';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogFormComponent } from './blog-form.component';
import { RouterModule } from '@angular/router'; // Add this line

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    BlogListComponent,
    BlogDetailComponent,
    BlogFormComponent,
    RouterModule
  ]
})
export class BlogModule {}
