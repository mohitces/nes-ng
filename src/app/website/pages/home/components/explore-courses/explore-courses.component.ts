import { Component } from '@angular/core';
import { Course, TOP_COURSES } from '../../../../data/courses.data';

interface Step {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface DestinationData {
  section_title: string;
  subtitle: string;
  steps: Step[];
}

interface Category {
  label: string;
  image: string;
  coursesCount: string;
  url: string;
}

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrl: './explore-courses.component.scss'
})
export class ExploreCoursesComponent {
  destinationData: DestinationData = {
    "section_title": "Destination for Pool of Network Technologies",
    "subtitle": "(Enroll yourself to learn most demanding technology trainings)",
    "steps": [
      {
        "step": 1,
        "title": "Start Learning",
        "description": "Start learning from our industry expert trainers like 5xCCIE",
        "icon": "school"
      },
      {
        "step": 2,
        "title": "Get Certified",
        "description": "After our training you can be ready for the Vendor Certification",
        "icon": "verified"
      },
      {
        "step": 3,
        "title": "Get Placed or Promoted",
        "description": "Learning latest and most advanced technology will help you with your Job to get placed or promoted",
        "icon": "trending_up"
      }
    ]
  };

  categories: Category[] = [
    {
      "label": "Cisco",
      "image": "https://www.nexpertsolutions.com/assets/img/Cisco.webp",
      "coursesCount": "22 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/cisco"
    },
    {
      "label": "Checkpoint",
      "image": "https://www.nexpertsolutions.com/assets/img/CCNP-Enterprise-Training-Online.webp",
      "coursesCount": "6 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/checkpoint"
    },
    {
      "label": "Juniper",
      "image": "https://www.nexpertsolutions.com/assets/img/CCNP-Enterprise-Cources-Online.webp",
      "coursesCount": "12 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/juniper"
    },
    {
      "label": "Palo-Alto",
      "image": "https://www.nexpertsolutions.com/assets/img/CCNP-Enterprise-Online-Certification.webp",
      "coursesCount": "4 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/palo-alto"
    },
    {
      "label": "Microsoft",
      "image": "https://www.nexpertsolutions.com/assets/img/CCNP-Enterprise-Online-Institute.webp",
      "coursesCount": "4 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/microsoft"
    },
    {
      "label": "Vmware",
      "image": "https://www.nexpertsolutions.com/assets/img/CCIE-Enterprise-Infrastructure-Online-Training.webp",
      "coursesCount": "2 Courses & Certification",
      "url": "https://www.vmware.com/"
    },
    {
      "label": "Comptia",
      "image": "https://www.nexpertsolutions.com/assets/img/lg-7.webp",
      "coursesCount": "4 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/comptia"
    },
    {
      "label": "F5",
      "image": "https://www.nexpertsolutions.com/assets/img/CCIE-Enterprise-Infrastructure-Online-Certification.webp",
      "coursesCount": "6 Courses & Certification",
      "url": "https://www.nexpertsolutions.com/f5"
    }
  ];

  topCourses: Course[] = TOP_COURSES;

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": false,
    "autoplay": false,
    "arrows": true,
    "responsive": [
      {
        "breakpoint": 1200,
        "settings": {
          "slidesToShow": 3
        }
      },
      {
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 2
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "slidesToShow": 1
        }
      }
    ]
  };

  toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}





