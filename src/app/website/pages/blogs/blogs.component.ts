import { Component, OnInit } from '@angular/core';
import { BlogPost, ContentApiService } from '../../services/content-api.service';

interface BlogCard {
  slug: string;
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
export class BlogsComponent implements OnInit {
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

  blogCards: BlogCard[] = [];

  constructor(private contentApi: ContentApiService) {}

  ngOnInit(): void {
    this.contentApi.getBlogs().subscribe({
      next: (response) => {
        const posts = response.data || [];
        if (!posts.length) return;
        this.blogCards = posts.map((post) => this.toCard(post));
      }
    });
  }

  private toCard(post: BlogPost): BlogCard {
    return {
      slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      tag: post.tags?.[0] || 'NES Blog',
      title: post.title,
      excerpt: post.meta_description || post.content.replace(/<[^>]+>/g, '').slice(0, 140),
      image: post.image || 'assets/images/learn skills image/computer networks.png'
    };
  }
}

