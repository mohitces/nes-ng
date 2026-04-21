import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-placements',
  templateUrl: './recent-placements.component.html',
  styleUrl: './recent-placements.component.scss'
})
export class RecentPlacementsComponent {
  data = {
    "section_title": "Recent Placed Candidates",
    "total_images": 34,
    "images": [
      { "index": 1, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn12.jpeg" },
      { "index": 2, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn11.jpeg" },
      { "index": 3, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn10.jpeg" },
      { "index": 4, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn9.jpeg" },
      { "index": 5, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn8.jpeg" },
      { "index": 6, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn7.jpeg" },
      { "index": 7, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn6.jpeg" },
      { "index": 8, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn5.jpeg" },
      { "index": 9, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn4.jpeg" },
      { "index": 10, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn3.jpeg" },
      { "index": 11, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn2.jpeg" },
      { "index": 12, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/sn1.jpeg" },
      { "index": 13, "url": "https://www.nexpertsolutions.com/assets/img/placements/AWS-Online-Cources.webp" },
      { "index": 14, "url": "https://www.nexpertsolutions.com/assets/img/ccsa.webp" },
      { "index": 15, "url": "https://www.nexpertsolutions.com/assets/img/ccse-course.webp" },
      { "index": 16, "url": "https://www.nexpertsolutions.com/assets/img/mcsa.webp" },
      { "index": 17, "url": "https://www.nexpertsolutions.com/assets/img/placements/Azure-Online-Training.webp" },
      { "index": 18, "url": "https://www.nexpertsolutions.com/assets/img/placements/Azure-Online-Cources.webp" },
      { "index": 19, "url": "https://www.nexpertsolutions.com/assets/img/placements/Azure-Online-Certification.webp" },
      { "index": 20, "url": "https://www.nexpertsolutions.com/assets/img/placements/Azure-Online-Institute.webp" },
      { "index": 21, "url": "https://www.nexpertsolutions.com/assets/img/placements/CCSA-Online-Training.webp" },
      { "index": 22, "url": "https://www.nexpertsolutions.com/assets/img/placements/ccna-placements.webp" },
      { "index": 23, "url": "https://www.nexpertsolutions.com/assets/img/placements/ccnp-placements.webp" },
      { "index": 24, "url": "https://www.nexpertsolutions.com/assets/img/placements/100-Job-Guaranteed-Courses.webp" },
      { "index": 25, "url": "https://www.nexpertsolutions.com/assets/img/placements/1.webp" },
      { "index": 26, "url": "https://www.nexpertsolutions.com/assets/img/placements/2.webp" },
      { "index": 27, "url": "https://www.nexpertsolutions.com/assets/img/placements/3.webp" },
      { "index": 28, "url": "https://www.nexpertsolutions.com/assets/img/placements/4.webp" },
      { "index": 29, "url": "https://www.nexpertsolutions.com/assets/img/placements/5.webp" },
      { "index": 30, "url": "https://www.nexpertsolutions.com/assets/img/placements/100-Percent-Job-Guarantee-Courses.webp" },
      { "index": 31, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/s2.jpg" },
      { "index": 32, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/s4.jpg" },
      { "index": 33, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/s3.jpg" },
      { "index": 34, "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/s1.jpg" }
    ]
  };

  r1 = this.data.images.slice(0, 11);
  r2 = this.data.images.slice(11, 23);
  r3 = this.data.images.slice(23, 34);

  // Duplicating slightly fewer times than before because there are 11-12 items per row
  // 12 items * ~300px = >3600px width. So 3 copies guarantees smooth looping.
  row1 = [...this.r1, ...this.r1, ...this.r1, ...this.r1];
  row2 = [...this.r2, ...this.r2, ...this.r2, ...this.r2];
  row3 = [...this.r3, ...this.r3, ...this.r3, ...this.r3];
}
