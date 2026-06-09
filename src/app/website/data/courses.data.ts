export interface CoursePrice {
  discounted: string;
  original: string;
  discount_percent: number;
}

export interface Course {
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
  source_summary: string;
  training_mode: string;
  language: string;
  prerequisite: string;
  page_sections?: {
    headline?: string;
    banner_image?: string;
    stats_line?: string;
    guidance_quote?: string;
    rating_text?: string;
    overview?: string[];
    major_topics?: string[];
    services?: string[];
    training_outcome?: string;
    prerequisites?: string[];
    next_steps?: string[];
    training_options?: string[];
    why_nes?: string[];
    syllabus?: string[];
    faqs?: string[];
    training_info?: Array<{ label: string; value: string }>;
  };
}

export const TOP_COURSES: Course[] = [
  {
    index: 1,
    title: 'CCIE DevNet Bootcamp',
    image: 'assets/images/course image/CCIE devnet.png',
    url: 'https://www.nexpertsolutions.com/cisco/devnet-expert-certification-online',
    modules: ['Python', 'Ansible', 'Terraform', 'GitLab', 'CICD Pipeline'],
    valid_till: '30-06-2026',
    reviews: 2552,
    hours: 64,
    buy_url: 'https://www.nexpertsolutions.com/cisco/devnet-expert-certification-online',
    price: {
      discounted: '₹ 163,981.00',
      original: 'INR 204,976.00',
      discount_percent: 20
    },
    source_summary: 'CCIE DevNet Bootcamp covering Python, Ansible, Terraform, GitLab, and CICD Pipeline.',
    training_mode: 'Devnet Courses Online',
    language: 'English | Hindi',
    prerequisite: 'As per NES live page'
  },
  {
    index: 2,
    title: 'Integrated CCIE Security',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/3.png',
    url: 'https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-security',
    modules: ['CCNA', 'CCNP Enterprise', 'CCNP Security', 'CCIE Security'],
    valid_till: '30-06-2026',
    reviews: 28552,
    hours: 250,
    buy_url: 'https://pmny.in/4rXQuilgJXR3',
    price: {
      discounted: 'INR 1,31,750',
      original: '₹1,55,000',
      discount_percent: 15
    },
    source_summary: 'Integrated CCIE Security path covering CCNA, CCNP Enterprise, CCNP Security, and CCIE Security.',
    training_mode: 'Devnet Certification Online',
    language: 'English | Hindi',
    prerequisite: 'Fresher'
  },
  {
    index: 3,
    title: 'Integrated CCIE Enterprise',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/2.png',
    url: 'https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-enterprise',
    modules: ['CCNA', 'CCNP Enterprise', 'CCIE Enterprise'],
    valid_till: '30-06-2026',
    reviews: 54842,
    hours: 200,
    buy_url: 'https://pmny.in/NrW06QEXFBYF',
    price: {
      discounted: 'INR 80,750',
      original: '₹95,000',
      discount_percent: 15
    },
    source_summary: 'Integrated CCIE Enterprise path covering CCNA, CCNP Enterprise, and CCIE Enterprise.',
    training_mode: 'Devnet Institute Online',
    language: 'English | Hindi',
    prerequisite: 'Fresher'
  },
  {
    index: 4,
    title: 'Master Program Security',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/5.png',
    url: 'https://www.nexpertsolutions.com/job-guarantee-courses/master-program-in-security-online-course',
    modules: ['FirePower', 'CCSA', 'CCSE', 'Palo-Alto'],
    valid_till: '30-06-2026',
    reviews: 34852,
    hours: 150,
    buy_url: 'https://pmny.in/nIcR807woQB8',
    price: {
      discounted: 'INR 80,750',
      original: '₹95,000',
      discount_percent: 15
    },
    source_summary: 'Master Program Security covering FirePower, CCSA, CCSE, and Palo-Alto.',
    training_mode: 'Devnet Associate',
    language: 'English | Hindi',
    prerequisite: 'Fresher'
  },
  {
    index: 5,
    title: 'NCNE Master Program',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/1.png',
    url: 'https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program',
    modules: ['CCNA', 'CCNP', 'AWS', 'Azure Az-104', 'MCSA', 'Linux'],
    valid_till: '30-06-2026',
    reviews: 58552,
    hours: 250,
    buy_url: 'https://pmny.in/ArgJTRNVI2WH',
    price: {
      discounted: 'INR 80,750',
      original: '₹95,000',
      discount_percent: 15
    },
    source_summary: 'NCNE Master Program covering CCNA, CCNP, AWS, Azure Az-104, MCSA, and Linux.',
    training_mode: 'Devnet Professional',
    language: 'English | Hindi',
    prerequisite: 'Fresher'
  },
  {
    index: 6,
    title: 'Master Program In Cloud',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/4.png',
    url: 'https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-cloud',
    modules: ['CCNA', 'AWS Associate', 'AWS Professional', 'Azure Az-104', 'GCA', 'GCP'],
    valid_till: '30-06-2026',
    reviews: 68542,
    hours: 150,
    buy_url: 'https://pmny.in/HJF81hSingQc',
    price: {
      discounted: 'INR 80,759',
      original: '₹95,000',
      discount_percent: 15
    },
    source_summary: 'Master Program In Cloud covering CCNA, AWS Associate, AWS Professional, Azure Az-104, GCA, and GCP.',
    training_mode: 'Devnet Professional',
    language: 'English | Hindi',
    prerequisite: 'Fresher'
  },
  {
    index: 7,
    title: 'Cisco-ACI Zero To Hero Training',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/4.png',
    url: 'https://www.nexpertsolutions.com/cisco/cisco-aci-foundation-to-advanced-training',
    modules: ['Foundation and Advanced 300-620, 300-630'],
    valid_till: '30-06-2026',
    reviews: 68542,
    hours: 62,
    buy_url: 'https://pmny.in/JInl9FLmOXrm',
    price: {
      discounted: 'INR 51,000/',
      original: '₹60,000',
      discount_percent: 15
    },
    source_summary: 'Cisco-ACI Zero To Hero Training covering Foundation and Advanced 300-620, 300-630.',
    training_mode: 'Devnet Professional',
    language: 'English | Hindi',
    prerequisite: 'CCNA-level networking fundamentals preferred'
  },
  {
    index: 8,
    title: 'AWS Associate+Professional',
    image: 'https://www.nexpertsolutions.com/assets/img/homebanner/4.png',
    url: 'https://www.nexpertsolutions.com/cloud/aws-professional-online-course',
    modules: ['Design Resilient,High-Performing,Secure Application'],
    valid_till: '30-06-2026',
    reviews: 24596,
    hours: 110,
    buy_url: 'https://www.nexpertsolutions.com/cloud/aws-professional-online-course',
    price: {
      discounted: 'INR 39,950',
      original: '₹47.000',
      discount_percent: 15
    },
    source_summary: 'AWS Associate+Professional covering design for resilient, high-performing, and secure applications.',
    training_mode: '',
    language: 'English | Hindi',
    prerequisite: 'As per NES live page'
  }
];
