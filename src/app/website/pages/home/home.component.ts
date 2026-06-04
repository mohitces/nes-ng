import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('skillsScroller') skillsScroller?: ElementRef<HTMLDivElement>;
  currentSlide = 0;
  totalSlides = 0;

  skillCards = [
    { name: 'Sneha Nair', company: 'TCS', designation: 'Network Engineer', logo: 'https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Cources.webp', image: 'assets/images/people images ai generated/placement images dummy/1.png' },
    { name: 'Rohit Kumar', company: 'Infosys', designation: 'Cloud Support Engineer', logo: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Institute.webp', image: 'assets/images/people images ai generated/placement images dummy/2.png' },
    { name: 'Ananya Gupta', company: 'Wipro', designation: 'Security Analyst', logo: 'https://www.nexpertsolutions.com/assets/img/Cisco-ACI-Online-Certification.webp', image: 'assets/images/people images ai generated/placement images dummy/3.png' },
    { name: 'Vikas Sharma', company: 'HCLTech', designation: 'NOC Engineer', logo: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Training.webp', image: 'assets/images/people images ai generated/placement images dummy/4.png' },
    { name: 'Priya Menon', company: 'Bosch', designation: 'Cloud Operations Associate', logo: 'https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Institute.webp', image: 'assets/images/people images ai generated/placement images dummy/5.png' },
    { name: 'Arjun Patel', company: 'Cognizant', designation: 'Cyber Security Associate', logo: 'https://www.nexpertsolutions.com/assets/img/Devnet-Online-Certification.webp', image: 'assets/images/people images ai generated/placement images dummy/6.png' },
    { name: 'Neha Singh', company: 'Capgemini', designation: 'Systems Engineer', logo: 'https://www.nexpertsolutions.com/assets/img/Cisco-ACI-Online-Training.webp', image: 'assets/images/people images ai generated/placement images dummy/7.png' },
    { name: 'Karan Verma', company: 'Tech Mahindra', designation: 'Infrastructure Engineer', logo: 'https://www.nexpertsolutions.com/assets/img/AWS-Online-Training.webp', image: 'assets/images/people images ai generated/placement images dummy/8.png' }
  ];

  blogCards = [
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

  scrollSkills(direction: 'left' | 'right'): void {
    const scroller = this.skillsScroller?.nativeElement;
    if (!scroller) return;

    const firstCard = scroller.querySelector('.skill-card') as HTMLElement | null;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16;
    const delta = (cardWidth + gap) * 2;
    scroller.scrollBy({ left: direction === 'right' ? delta : -delta, behavior: 'smooth' });
    setTimeout(() => this.updateSlideState(), 220);
  }

  ngAfterViewInit(): void {
    this.updateSlideState();
  }

  updateSlideState(): void {
    const scroller = this.skillsScroller?.nativeElement;
    if (!scroller) return;
    const firstCard = scroller.querySelector('.skill-card') as HTMLElement | null;
    if (!firstCard) return;
    const step = firstCard.offsetWidth + 16;
    const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    this.totalSlides = Math.max(1, Math.ceil(maxScroll / (step * 2)) + 1);
    this.currentSlide = Math.max(0, Math.min(this.totalSlides - 1, Math.round(scroller.scrollLeft / (step * 2))));
  }
}
