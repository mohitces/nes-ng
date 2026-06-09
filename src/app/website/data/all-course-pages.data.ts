import { Course, TOP_COURSES } from './courses.data';
import { SCRAPED_COURSE_CONTENT } from './scraped-course-content.data';

const makeCourse = (index: number, title: string, url: string): Course => ({
  index,
  title,
  image: TOP_COURSES[0].image,
  url,
  modules: ['Overview', 'Curriculum', 'Labs', 'Certification Guidance'],
  valid_till: 'To be updated',
  reviews: 0,
  hours: 0,
  buy_url: url,
  price: {
    discounted: 'Price on request',
    original: 'Price on request',
    discount_percent: 0
  },
  source_summary: `${title} training course page mapped from NES live URL. Detailed text sections are prepared for per-course content sync.`,
  training_mode: 'Online/Classroom',
  language: 'English | Hindi',
  prerequisite: 'As per NES live page',
  page_sections: {
    headline: `${title} Certification Training Course Online`,
    banner_image: 'assets/images/banners/1.png',
    stats_line: 'Training details mapped from NES live page URL',
    guidance_quote: 'Get expert guide for better career guidance.',
    rating_text: 'Ratings and review counts will be mapped per course.',
    overview: [
      `This page is mapped to the official NES course URL: ${url}`,
      'Course-specific long-form overview will be patched from the corresponding live page text.',
      'Training format, modules, and exam guidance will be maintained per current page layout.'
    ],
    major_topics: ['Training Overview', 'Exam Track', 'Hands-on Labs', 'Placement Support'],
    services: ['24x7 Lab Support', 'Recorded Sessions', 'Mentor Support', 'Placement Assistance'],
    training_outcome: 'Learners build practical, job-ready skills aligned to the selected certification path.',
    prerequisites: ['Basic networking/IT fundamentals (course-dependent)'],
    next_steps: ['Advanced certification paths and specialization tracks'],
    training_options: ['Online', 'Classroom'],
    why_nes: ['Real-device labs', 'Mentor-led guidance', 'Career support'],
    syllabus: ['Detailed syllabus to be mapped from live page'],
    faqs: ['FAQ content to be mapped from live page'],
    training_info: [
      { label: 'Source URL', value: url },
      { label: 'Training Mode', value: 'Online/Classroom' }
    ]
  }
});

const NES_COURSE_MAP: Array<[string, string]> = [
  ['CCNA 200-301', 'https://www.nexpertsolutions.com/cisco/ccna-certification-training-online'],
  ['CCNP Enterprise', 'https://www.nexpertsolutions.com/cisco/ccnp-enterprise-online-course'],
  ['CCNP Security', 'https://www.nexpertsolutions.com/cisco/ccnp-security-online-certification'],
  ['CCNP Data Center', 'https://www.nexpertsolutions.com/cisco/ccnp-data-center-training-course-online'],
  ['CCNP Service Provider', 'https://www.nexpertsolutions.com/cisco/ccnp-service-provider-online-training-institute'],
  ['CCNP Collaboration', 'https://www.nexpertsolutions.com/cisco/ccnp-collaboration-online-training'],
  ['CCIE Enterprise Infrastructure', 'https://www.nexpertsolutions.com/cisco/ccie-enterprise-infrastructure-course-online'],
  ['CCIE Security', 'https://www.nexpertsolutions.com/cisco/ccie-security-training-online'],
  ['CCIE Data Center', 'https://www.nexpertsolutions.com/cisco/ccie-data-center-certification-online'],
  ['CCIE Service Provider', 'https://www.nexpertsolutions.com/cisco/ccie-service-provider-training-online'],
  ['SD-WAN', 'https://www.nexpertsolutions.com/cisco/sd-wan-online-training-institute'],
  ['SD-ACCESS', 'https://www.nexpertsolutions.com/cisco/sd-access-certification-online-training'],
  ['ACI', 'https://www.nexpertsolutions.com/cisco/aci-online-training-course'],
  ['VXLAN-EVPN', 'https://www.nexpertsolutions.com/cisco/vxlan-evpn-certification-online-course'],
  ['Network Automation & DevOps', 'https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training'],
  ['Segment Routing', 'https://www.nexpertsolutions.com/cisco/segment-routing-online-training'],
  ['ISE', 'https://www.nexpertsolutions.com/cisco/ise-training-online-institute'],
  ['Nexus', 'https://www.nexpertsolutions.com/cisco/nexus-online-training-course'],
  ['BGP', 'https://www.nexpertsolutions.com/cisco/bgp-online-course-training'],
  ['MPLS', 'https://www.nexpertsolutions.com/cisco/mpls-online-training'],
  ['FirePower', 'https://www.nexpertsolutions.com/cisco/firepower-training-course-online'],
  ['DEVNET Associate', 'https://www.nexpertsolutions.com/cisco/devnet-associate-certification-course-online'],
  ['DEVNET Professional', 'https://www.nexpertsolutions.com/cisco/devnet-professional-certification-training-online'],
  ['DEVNET Expert', 'https://www.nexpertsolutions.com/cisco/devnet-expert-certification-online'],
  ['Cisco-ACI Zero To Hero', 'https://www.nexpertsolutions.com/cisco/cisco-aci-foundation-to-advanced-training'],
  ['CCSA', 'https://www.nexpertsolutions.com/checkpoint/ccsa-online-training'],
  ['CCSE', 'https://www.nexpertsolutions.com/checkpoint/ccse-online-course'],
  ['MCSA', 'https://www.nexpertsolutions.com/microsoft/mcsa-online-course-training'],
  ['JNCIA', 'https://www.nexpertsolutions.com/juniper/jncia-junos-online-training'],
  ['JNCIS Enterprise', 'https://www.nexpertsolutions.com/juniper/jncis-enterprise-training-online'],
  ['JNCIS Security', 'https://www.nexpertsolutions.com/juniper/jncis-security-online-training'],
  ['JNCIS Service Provider', 'https://www.nexpertsolutions.com/juniper/jncis-service-provider-online-certification'],
  ['JNCIP Enterprise', 'https://www.nexpertsolutions.com/juniper/jncip-enterprise-online-course'],
  ['JNCIP Security', 'https://www.nexpertsolutions.com/juniper/jncip-security-course-online'],
  ['JNCIP Service Provider', 'https://www.nexpertsolutions.com/juniper/jncip-service-provider-certification-online-training'],
  ['VCA', 'https://www.nexpertsolutions.com/vmware/vca-certification-course-online'],
  ['VCP', 'https://www.nexpertsolutions.com/vmware/vcp-training-online'],
  ['A+', 'https://www.nexpertsolutions.com/comptia/a-plus-online-training-course'],
  ['N+', 'https://www.nexpertsolutions.com/comptia/n-plus-certification-training-course'],
  ['Server+', 'https://www.nexpertsolutions.com/comptia/server-plus-online-certification'],
  ['CASP', 'https://www.nexpertsolutions.com/comptia/casp-plus-certification-training-online'],
  ['AWS Associate', 'https://www.nexpertsolutions.com/cloud/aws-associate-certification-online-training'],
  ['AWS Professional', 'https://www.nexpertsolutions.com/cloud/aws-professional-online-course'],
  ['Microsoft Azure AZ-104', 'https://www.nexpertsolutions.com/cloud/microsoft-azure-az-104-certification-online-course'],
  ['GCA', 'https://www.nexpertsolutions.com/cloud/gca-online-training-course'],
  ['GCP', 'https://www.nexpertsolutions.com/cloud/gcp-online-course'],
  ['F5 101 Application Fundamental', 'https://www.nexpertsolutions.com/f5/f5-101-certification-online-training-course'],
  ['F5 201 TMOS Administration', 'https://www.nexpertsolutions.com/f5/f5-201-training-course-online'],
  ['301A & 301B LTM', 'https://www.nexpertsolutions.com/f5/301a-and-302b-ltm-training-online'],
  ['F5 303 ASM', 'https://www.nexpertsolutions.com/f5/303-asm-online-certification'],
  ['F5 302 GTM', 'https://www.nexpertsolutions.com/f5/302-gtm-online-training'],
  ['RedHat Linux', 'https://www.nexpertsolutions.com/redhat-linux-course-online'],
  ['ACE', 'https://www.nexpertsolutions.com/palo-alto/ace-certification-online'],
  ['PCNSE', 'https://www.nexpertsolutions.com/palo-alto/pcnse-online-course'],
  ['Panorama', 'https://www.nexpertsolutions.com/palo-alto/panorama-certification-online-course'],
  ['AWS Associate+Professional', 'https://www.nexpertsolutions.com/cloud/aws-professional-online-course'],
  ['CCNA CCNP Enterprise', 'https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-enterprise'],
  ['NCNE Master Program', 'https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program'],
  ['Integrated CCIE Enterprise', 'https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-enterprise'],
  ['Integrated CCIE Security', 'https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-security'],
  ['Multi-Vendor Firewall', 'https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-firewall'],
  ['Multi-Vendor Cloud', 'https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-cloud'],
  ['Master Program in Security', 'https://www.nexpertsolutions.com/job-guarantee-courses/master-program-in-security-online-course']
];

export const ALL_COURSE_PAGES: Course[] = NES_COURSE_MAP.map((entry, idx) => makeCourse(idx + 1, entry[0], entry[1]));

const applyOverride = (title: string, patch: Partial<Course>) => {
  const course = ALL_COURSE_PAGES.find((c) => c.title === title);
  if (!course) return;
  const existingSections = course.page_sections;
  Object.assign(course, patch);
  course.page_sections = {
    ...existingSections,
    ...(patch.page_sections || {})
  };
};

const normalizeCourseUrl = (url: string): string =>
  url
    .replace(/^https?:\/\/(www\.)?nexpertsolutions\.com/i, 'https://www.nexpertsolutions.com')
    .replace('/index.php', '')
    .replace(/\/$/, '');

const applyScrapedContent = () => {
  SCRAPED_COURSE_CONTENT.forEach((scraped) => {
    const course = ALL_COURSE_PAGES.find((item) => normalizeCourseUrl(item.url) === normalizeCourseUrl(scraped.url));
    if (!course) return;

    const existingSections = course.page_sections || {};
    Object.assign(course, {
      ...scraped,
      title: course.title,
      url: course.url,
      buy_url: course.buy_url,
      image: course.image,
      price: course.price,
      valid_till: course.valid_till
    });
    course.page_sections = {
      ...existingSections,
      ...(scraped.page_sections || {}),
      banner_image: existingSections.banner_image || scraped.page_sections?.banner_image || 'assets/images/banners/1.png'
    };
  });
};

const ccnaCourse = ALL_COURSE_PAGES.find((course) => course.title === 'CCNA 200-301');
if (ccnaCourse) {
  ccnaCourse.modules = [
    'Network Fundamental',
    'Network Access',
    'IP Connectivity',
    'IP Services',
    'Security Fundamentals',
    'Automation and Programmability',
    'Virtualization Fundamentals',
    'Wireless Principles',
    'IPv6 Addressing Prefix and Types'
  ];
  ccnaCourse.valid_till = '31-03-2026';
  ccnaCourse.reviews = 3572;
  ccnaCourse.hours = 50;
  ccnaCourse.source_summary =
    'Cisco Certified Network Associate (CCNA 200-301) training and certification at NES with real-device labs, 24x7 support, and placement-oriented guidance.';
  ccnaCourse.training_mode = 'Online/Classroom';
  ccnaCourse.language = 'English | Hindi';
  ccnaCourse.prerequisite = 'Network+, basic IP addressing, and network fundamentals';
  ccnaCourse.page_sections = {
    headline: 'CCNA Certification Training Course Online',
    banner_image: 'assets/images/banners/1.png',
    stats_line: '50 Hours Online-Classroom | 24596 Student Enrolled',
    guidance_quote: 'Get Expert Guide For Your Better Career Guidance.',
    rating_text: '4.7 | 3572 Reviews',
    overview: [
      'Cisco Certified Network Associate (CCNA 200 301) online training and certification in IT networking offered by Cisco Systems.',
      'CCNA is the first step to start a career in IT-Networking and validates knowledge to install, operate, and troubleshoot small to medium enterprise branch networks.',
      'Net Expert Solutions provides CCNA training on real and latest devices with 24x7 online lab support, placement/job assistance, and industry-focused practical troubleshooting.'
    ],
    major_topics: [
      'Network Fundamental',
      'Network Access',
      'IP Connectivity',
      'IP Services',
      'Security Fundamentals',
      'Automation and Programmability',
      'Virtualization Fundamentals',
      'Wireless Principles',
      'IPv6 Addressing Prefix and Types'
    ],
    services: [
      'Material: PPTs, recording videos, workbook, lab access, and required software',
      'Support: 24x7 lab and management support',
      'Webinar: free webinars with industry experts in new technologies',
      'Placement: 100% placement guarantee/assistance (conditions applicable)',
      'NES Certificate: after training and feedback process',
      'Vendor Exam: help to book the vendor exam'
    ],
    training_outcome:
      'In 50 hours of CCNA 200-301 training, learners build routing, switching, security, wireless, SDN, and automation skills through hands-on labs.',
    prerequisites: ['Network+', 'Knowledge of basic IP addressing', 'Understanding of network fundamentals'],
    next_steps: [
      'CCNP Enterprise',
      'CCNP Data Center',
      'CCNP Security',
      'CCNP Collaboration',
      'CCNP Service Provider',
      'Cisco Certified DevNet Professional'
    ],
    training_options: [
      'ENCOR - Implementing and Operating Cisco Enterprise Network Core Technologies',
      'DCCOR - Implementing and Operating Cisco Data Center Core Technologies',
      'SCOR - Implementing and Operating Cisco Security Core Technologies',
      'CLCOR - Implementing and Operating Cisco Collaboration Core Technologies',
      'SPCOR - Implementing and Operating Cisco Service Provider Network Core Technologies',
      'DEVCOR - Developing Applications Using Cisco Core Platforms and APIs'
    ],
    why_nes: [
      'In-depth technology knowledge in real-world networks',
      'Career guidance with CCIE instructors',
      '100% placement record in MNCs',
      '24x7 training, lab, and management support',
      'Interview preparation and exam support'
    ],
    syllabus: [
      '20% 1.0 Network Fundamentals',
      '20% 2.0 Network Access',
      '25% 3.0 IP Connectivity',
      '10% 4.0 IP Services',
      '15% 5.0 Security Fundamentals',
      '10% 6.0 Automation and Programmability'
    ],
    faqs: [
      'What is CCNA Certification and why is it important?',
      'How do I prepare for the CCNA Certification exam?',
      'What are the benefits of CCNA Certification?',
      'Can I take the CCNA Certification exam online?',
      'How long does CCNA Certification last and how do I renew it?'
    ],
    training_info: [
      { label: 'Training Duration', value: '50 Hours' },
      { label: 'Exam Code', value: '200-301' },
      { label: 'Language', value: 'English | Hindi' },
      { label: 'Certification Cost', value: 'USD $300' },
      { label: 'Tuesday-Friday', value: '1.5 Hours/Day' },
      { label: 'Saturday-Sunday', value: '2 Hours/Day' },
      { label: 'Training Mode', value: 'Online/Classroom' },
      { label: 'Enquiry', value: 'Call +91-9582-801-239' }
    ]
  };
}

applyOverride('CCNP Enterprise', {
  valid_till: '31-03-2026',
  reviews: 5472,
  hours: 40,
  source_summary:
    'CCNP Enterprise online certification training focused on design, deployment, troubleshooting, security, and automation for enterprise networks.',
  prerequisite: 'CCNA 200-301 training recommended',
  page_sections: {
    headline: 'CCNP Enterprise Certification Training Course Online',
    stats_line: '40 Hours Online-Classroom | 46965 Student Enrolled',
    guidance_quote: 'Get Expert Guide For Your Better Career Guidance.',
    rating_text: '4.9 | 5472 Reviews',
    overview: [
      'CCNP Enterprise is a professional certification focused on core enterprise networking technologies.',
      'Training includes architecture, virtualization, infrastructure, network assurance, security, and automation.',
      'Course is designed to prepare learners for ENCOR 350-401 and advanced enterprise roles.'
    ],
    major_topics: ['Architecture', 'Virtualization', 'Infrastructure', 'Network Assurance', 'Security', 'Automation'],
    services: ['24x7 Lab Support', 'Recorded Sessions', 'Mentor Support', 'Placement Assistance'],
    training_outcome: 'Learners gain deployment and optimization skills for enterprise-grade Cisco networks.',
    prerequisites: ['CCNA 200-301 training'],
    next_steps: [
      'CCIE Enterprise Infrastructure',
      'CCNP Data Center',
      'CCNP Security',
      'CCNP Collaboration',
      'CCNP Service Provider',
      'Cisco Certified DevNet Professional'
    ]
  } as any
});

applyOverride('CCSA', {
  valid_till: '31-03-2026',
  reviews: 3572,
  hours: 40,
  source_summary:
    'Check Point Certified Security Administrator (CCSA) training covering firewall policy, NAT, VPN, monitoring, and troubleshooting.',
  prerequisite: 'CCNA and good firewall knowledge',
  page_sections: {
    headline: 'CCSA Certification Training Course Online',
    stats_line: '40 Hours Online-Classroom | 65596 Student Enrolled',
    guidance_quote: 'Get Expert Guide For Your Better Career Guidance.',
    rating_text: '4.7 | 3572 Reviews',
    overview: [
      'CCSA training provides core administration skills for Check Point security solutions.',
      'Topics include firewall technology, security policy management, NAT, VPN, and operations.',
      'Program is aimed at professionals managing enterprise security infrastructure.'
    ],
    major_topics: ['Firewall Technology', 'Security Policy', 'NAT', 'VPN Administration', 'Monitoring and Troubleshooting'],
    prerequisites: ['CCNA', 'Good knowledge of firewall'],
    next_steps: ['CCSE']
  } as any
});

applyOverride('SD-WAN', {
  source_summary:
    'SD-WAN certification training aligned with Cisco ENSDWI 300-415, covering SD-WAN architecture, deployment, policy, and operations.',
  page_sections: {
    headline: 'SD-WAN Certification Training Course Online',
    overview: [
      'Training maps to Implementing Cisco SD-WAN Solutions (ENSDWI 300-415).',
      'Covers controllers, edge deployment, policies, security, QoS, multicast, and operations.'
    ]
  } as any
});

applyOverride('AWS Associate', {
  source_summary:
    'AWS Associate certification training focused on core AWS services and cloud architecture use cases for job-ready roles.',
  page_sections: {
    headline: 'AWS Associate Certification Training Course Online',
    overview: [
      'Course prepares learners for AWS Associate-level certification and practical cloud workloads.',
      'Common role outcomes include AWS Cloud Engineer, Solutions Architect, and Developer tracks.'
    ]
  } as any
});

applyScrapedContent();
