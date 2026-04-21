import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  slides = [
    {
      "index": 1,
      "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/ccie1.jpeg",
      "link": null
    },
    // {
    //   "index": 3,
    //   "url": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/09/surajsoni.webp",
    //   "link": null
    // },
    {
      "index": 4,
      "url": "https://www.nexpertsolutions.com/assets/img/banner/14.png",
      "link": null
    },
    {
      "index": 5,
      "url": "https://www.nexpertsolutions.com/assets/img/banner/11.png",
      "link": "https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training"
    },
    {
      "index": 6,
      "url": "https://www.nexpertsolutions.com/assets/img/banner/13.png",
      "link": null
    }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "arrows": true,
    "prevArrow": ".custom-prev",
    "nextArrow": ".custom-next"
  };
}
