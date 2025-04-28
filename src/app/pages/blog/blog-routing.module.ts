// src/app/pages/blog/blog-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list.component';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogFormComponent } from './blog-form.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'new', component: BlogFormComponent },
  { path: ':id', component: BlogDetailComponent },
  { path: ':id/edit', component: BlogFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
