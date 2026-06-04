import { Component } from '@angular/core';

interface BlogCard {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  featuredBlog = {
    title: 'NES blogs for networking, cloud, and cybersecurity career growth',
    subtitle: 'Explore practical training insights, certification roadmaps, and career guidance from NES mentors.',
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'Explore courses',
    videoLine: 'Meet NES: Agentic-powered upskilling.',
    duration: '2:29',
    bannerImage: 'assets/images/banners/blogs page banner.png'
  };

  partnerLogos = [
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/Devnet-Online-Cources.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Training.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Cources.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Certification.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Institute.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Training.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Cources.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Certification.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Institute.webp' },
    { name: 'Placement company', src: 'https://www.nexpertsolutions.com/assets/img/Devnet-Online-Training.webp' }
  ];

  blogCards: BlogCard[] = [
    {
      tag: 'Enterprise-wide training',
      title: 'Upskill your entire organization',
      excerpt: 'Cultivate a learning culture that keeps every team engaged and growing.',
      image: 'assets/images/learn skills image/computer networks.png'
    },
    {
      tag: 'Certification preparation',
      title: 'Develop and validate skills',
      excerpt: 'Build role-ready capabilities with structured certification-focused learning paths.',
      image: 'assets/images/learn skills image/IT Certified.png'
    },
    {
      tag: 'Cloud and Security',
      title: 'Boost productivity with modern tech',
      excerpt: 'Help teams apply cloud and security best practices with practical guided learning.',
      image: 'assets/images/learn skills image/cloud computing.png'
    }
  ];
}

