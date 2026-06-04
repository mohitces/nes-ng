import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'course/:slug', component: CourseDetailComponent },
  { path: 'blogs', component: BlogsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
