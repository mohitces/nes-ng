import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeCarouselComponent } from './pages/home/components/home-carousel/home-carousel.component';
import { ExploreCoursesComponent } from './pages/home/components/explore-courses/explore-courses.component';
import { StudentReviewsComponent } from './pages/home/components/student-reviews/student-reviews.component';
import { PlacementCompaniesComponent } from './pages/home/components/placement-companies/placement-companies.component';
import { RecentPlacementsComponent } from './pages/home/components/recent-placements/recent-placements.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ExploreCoursesComponent,
    StudentReviewsComponent,
    PlacementCompaniesComponent,
    RecentPlacementsComponent,
    CourseDetailComponent,
    BlogsComponent,
    AllCoursesComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SlickCarouselModule
  ]
})
export class WebsiteModule { }
