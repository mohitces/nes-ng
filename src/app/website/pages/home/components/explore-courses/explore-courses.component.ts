import { Component } from '@angular/core';

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

interface CoursePrice {
  discounted: string;
  original: string;
  discount_percent: number;
}

interface Course {
  index: number;
  title: string;
  image: string;
  url: string;
  modules: string[];
  valid_till: string;
  reviews: number;
  hours: number;
  buy_url: string;
  price: CoursePrice;
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

  topCourses: Course[] = [
    {
      "index": 1,
      "title": "CCIE DevNet Bootcamp",
      "image": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/dev.jpg",
      "url": "https://www.devnet-expert.com/",
      "modules": ["Python", "Ansible", "Terraform", "GitLab", "CICD Pipeline"],
      "valid_till": "31-03-2026",
      "reviews": 2552,
      "hours": 64,
      "buy_url": "https://www.devnet-expert.com/course/devnet-expert-bootcamp/",
      "price": {
        "discounted": "₹1,63,981 INR",
        "original": "₹2,04,976 INR",
        "discount_percent": 20
      }
    },
    {
      "index": 2,
      "title": "Integrated CCIE Security",
      "image": "https://www.nexpertsolutions.com/assets/img/homebanner/3.png",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-security",
      "modules": ["CCNA", "CCNP Enterprise", "CCNP Security", "CCIE Security"],
      "valid_till": "31-03-2026",
      "reviews": 28552,
      "hours": 250,
      "buy_url": "https://pmny.in/4rXQuilgJXR3",
      "price": {
        "discounted": "₹1,31,750 INR",
        "original": "₹1,55,000 INR",
        "discount_percent": 15
      }
    },
    {
      "index": 3,
      "title": "Integrated CCIE Enterprise",
      "image": "https://www.nexpertsolutions.com/assets/img/homebanner/2.png",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-enterprise",
      "modules": ["CCNA", "CCNP Enterprise", "CCIE Enterprise"],
      "valid_till": "31-03-2026",
      "reviews": 54842,
      "hours": 200,
      "buy_url": "https://pmny.in/NrW06QEXFBYF",
      "price": {
        "discounted": "₹80,750 INR",
        "original": "₹95,000 INR",
        "discount_percent": 15
      }
    },
    {
      "index": 4,
      "title": "Master Program Security",
      "image": "https://www.nexpertsolutions.com/assets/img/homebanner/5.png",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/master-program-in-security-online-course",
      "modules": ["FirePower", "CCSA", "CCSE", "Palo-Alto"],
      "valid_till": "31-03-2026",
      "reviews": 34852,
      "hours": 150,
      "buy_url": "https://pmny.in/nIcR807woQB8",
      "price": {
        "discounted": "₹80,750 INR",
        "original": "₹95,000 INR",
        "discount_percent": 15
      }
    },
    {
      "index": 5,
      "title": "NCNE Master Program",
      "image": "https://www.nexpertsolutions.com/assets/img/homebanner/1.png",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program",
      "modules": ["CCNA", "CCNP", "AWS", "Azure Az-104", "MCSA", "Linux"],
      "valid_till": "31-03-2026",
      "reviews": 58552,
      "hours": 250,
      "buy_url": "https://pmny.in/ArgJTRNVI2WH",
      "price": {
        "discounted": "₹80,750 INR",
        "original": "₹95,000 INR",
        "discount_percent": 15
      }
    },
    {
      "index": 6,
      "title": "Master Program In Cloud",
      "image": "https://www.nexpertsolutions.com/assets/img/homebanner/4.png",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-cloud",
      "modules": ["CCNA", "AWS Associate", "AWS Professional", "Azure Az-104", "GCA", "GCP"],
      "valid_till": "31-03-2026",
      "reviews": 68542,
      "hours": 150,
      "buy_url": "https://pmny.in/HJF81hSingQc",
      "price": {
        "discounted": "₹80,759 INR",
        "original": "₹95,000 INR",
        "discount_percent": 15
      }
    },
    {
      "index": 7,
      "title": "Cisco-ACI Zero To Hero",
      "image": "https://www.nexpertsolutions.com/blogs/wp-content/uploads/2023/08/ft.jpg",
      "url": "https://www.nexpertsolutions.com/cisco/cisco-aci-foundation-to-advanced-training",
      "modules": ["Foundation and Advanced", "300-620", "300-630"],
      "valid_till": "31-03-2026",
      "reviews": 68542,
      "hours": 62,
      "buy_url": "https://pmny.in/JInl9FLmOXrm",
      "price": {
        "discounted": "₹51,000 INR",
        "original": "₹60,000 INR",
        "discount_percent": 15
      }
    }
  ];

  slideConfig = {
    "slidesToShow": 3,
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
}
