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
      "url": "assets/images/banners/1.png",
      "link": null
    },
    {
      "index": 2,
      "url": "assets/images/banners/2.png",
      "link": null
    },
    {
      "index": 3,
      "url": "assets/images/banners/3.png",
      "link": "https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training"
    },
    {
      "index": 4,
      "url": "assets/images/banners/faltu.png",
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
