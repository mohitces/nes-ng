import { Component } from '@angular/core';
import { ContentApiService } from '../../../../services/content-api.service';

interface Review {
  index: number;
  name: string;
  avatar: string;
  review: string;
}

@Component({
  selector: 'app-student-reviews',
  templateUrl: './student-reviews.component.html',
  styleUrl: './student-reviews.component.scss'
})
export class StudentReviewsComponent {
  reviewData: any = {
    "section_title": "Our Students Reviews",
    "rating_image": "https://www.nexpertsolutions.com/assets/img/CCIE-Security-Online-Certification.webp",
    "reviews": [
      { "index": 1, "name": "Sameer Khan", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Security-Online-Cources.webp", "review": "I'll just completed ccna training at Net Expert Solution , Now i am glad for joining this institute , because of Trainer is very Helpful and Experienced , Also this institute provide Recorded Sesssion. I'll Highly recomended to join this institute." },
      { "index": 2, "name": "Aasim Khan", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Security-Online-Institute.webp", "review": "I Joined CCNA From Net Expert Solutions, Overall training exceeded my expectations. It was very well organized, all topics were clear, detailed and very well explained. The instructor answered all questions. Thanks NES Team" },
      { "index": 3, "name": "Sagar Kumar", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Data-Center-Online-Training.webp", "review": "I have done my CCNA from NET EXPERT solution.i had a great experience over there.All the Teaching staff so helpful and very supportive They helped me to understand any of the topics.They given me more practicals rather than the theory.Very thanks to NET EXPERT solution." },
      { "index": 4, "name": "Sulhela Sheikh", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Data-Center-Online-Cources.webp", "review": "I was doing my CCNA, CCIE courses from net expert solutions really they provides wonderfull service and all teachers and faculty is very supportive and now I am placed in cognizant, Special thanks for sunit sir you are the great teacher and mentor thank you for supporting me.." },
      { "index": 5, "name": "Asgar Alam", "avatar": "https://www.nexpertsolutions.com/assets/img/ccna-course-institute-in-noida.webp", "review": "It is a very good training institute; I took AWS cloud training from here, which was very helpful for me. Thank Net Expert Solutions. & Specially Arshi Ma'am." },
      { "index": 6, "name": "Sachin Rajput", "avatar": "https://www.nexpertsolutions.com/assets/img/ccna.webp", "review": "Hello I am Sachin Kumar. Your institute is very helpful for me and my further studies. Your trainer is so good and they are helped me for clearing all my concepts and doubt." },
      { "index": 7, "name": "Abhishek Chauhan", "avatar": "https://www.nexpertsolutions.com/assets/img/CCNP-Enterprise.webp", "review": "I have done my CCNA from NET EXPERT solution. i had great experience over there. All the teaching staff were so helpful and supportive They helped me to understand the topics. They give more practicals rather than the theory. They have their own labs and server through which i learn a lot." },
      { "index": 8, "name": "Ashutosh Gautam", "avatar": "https://www.nexpertsolutions.com/assets/img/CCNP-Security.webp", "review": "For a fresher like me this is the best place to start your IT Career, instructors in the institute gives you a practical approach to boost your skills in this field. They also have different routers and switches to do hands on device. Best in Noida" },
      { "index": 9, "name": "JIGAR PATEL", "avatar": "https://www.nexpertsolutions.com/assets/img/CCNP-Data-Center.webp", "review": "I was very impressed with Gagan Malhotra, he exceeds an expectation goin above and beyond training by taking students to next level in getting certified. He keeps informing me about preparation material for exams and the most important thing that he highly focused on was practical rather than theory which was best for me to understand easily. I was one of the student who recently got certified CCNA through his initiative." },
      { "index": 10, "name": "Hitesh Chaudhary", "avatar": "https://www.nexpertsolutions.com/assets/img/CCNP-Service-Provider.webp", "review": "It's excellent institute ; special thanks to the trainer who guidence me Alot during the CCA and CCNP training . thank you for the training and guidance NET EXPERT SOLUTIONS" },
      { "index": 11, "name": "Ankit Sirohi", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Enterprise.webp", "review": "It's excellent training institute, special thanks to the training who guidence me a lot during the CCNA and CCNP training. Thank you for training and guidance Net Expert solution" },
      { "index": 12, "name": "Babul Singh", "avatar": "https://www.nexpertsolutions.com/assets/img/CCNP-Collaboration.webp", "review": "It's excellent training institute , special thanks to the trainer who guidence me a lot during the CCNA training. And also thanks to management team.." },
      { "index": 13, "name": "Naveen Kumar", "avatar": "https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider.webp", "review": "I have done CCIE enterprise infrastructure course from Net Expert solutions. It is very good institute & fantastic atmosphere for study. Faculties are very friendly & always ready to for the help." },
      { "index": 14, "name": "Amit Dutta", "avatar": "https://www.nexpertsolutions.com/assets/img/SD-WAN.webp", "review": "I am thankful to NES who has support me to gain my knowledge in AWS, i appreciate to Sunit sir who gave me the classes and share practical knowledge over AWS. Also thanks to Ms.Shaila and Ms.Arshi for her support." },
      { "index": 15, "name": "Nagma Chaudhary", "avatar": "https://www.nexpertsolutions.com/assets/img/SD-ACCESS.webp", "review": "Nice place to enhance the skills, keep yourself update with latest technology in market, take the courses and do whenever, wherever you want, nice latest updated trainers with cool presentations skills. Most Recommened Centere." },
      { "index": 16, "name": "Shashikant Tiwari", "avatar": "https://www.nexpertsolutions.com/assets/img/CISCO-ACI.webp", "review": "It's excellent training institute , special thanks to sunit sir who guidence me lot during the sdwan and AWS cloud training." },
      { "index": 17, "name": "VISHW NATH", "avatar": "https://www.nexpertsolutions.com/assets/img/Next-Generation-Firewall.webp", "review": "Best institute Net Expert solution. In future best platform about learn Net Expert solution online, And best teachers perfect solution any questions and proper answer. So I am happy" },
      { "index": 18, "name": "Mateen Walizada", "avatar": "https://www.nexpertsolutions.com/assets/img/VXLAN-EVPN.webp", "review": "Net Expert is an is excellent training center. The instructors are highly professional and have vast knowledge and the staff are really cooperative and always available, I highly recommend Net Expert for those who want to study Cisco and another vepro, additionally, they provided lab work that is unique to the exam being taken & works perfectly with the rest of the curriculum." },
      { "index": 19, "name": "Arpit Semwal", "avatar": "https://www.nexpertsolutions.com/assets/img/AUTOMATION.webp", "review": "The institute is superb, interactive and useful. I did my CCNA course in this institute. The trainer were very supportive, helpful and cleared all my doubts patiently." },
      { "index": 20, "name": "Ayush Joshi", "avatar": "https://www.nexpertsolutions.com/assets/img/Segment-Routing.webp", "review": "The course was good and the instructor also had thorough knowledge of what they are teaching. The faculty was also supportive and their teaching style helps students to grasp the topics in an effective way" },
      { "index": 21, "name": "Suraj Kumar", "avatar": "https://www.nexpertsolutions.com/assets/img/ISE.webp", "review": "first thank you to Ms. Arshi for hats off her work. She is follow up me since April 2021 to till date for ccna and Microsoft certification course. must be proud to her where she work for institution. thank u again Ms. Arshi. i will definately join your institution for CCNP or other professionals course." },
      { "index": 22, "name": "Prerna", "avatar": "https://www.nexpertsolutions.com/assets/img/ccie-institute-in-noida.webp", "review": "Hi Everyone, This side prerna, I Enrolled at Net Expert Solutions for AWS. Trainers & 24*7 well-equipped lab was very good at NES. I learned Everything on live racks. I will suggest If anybody is looking for a career in networking. then you can join NES & build Your career, this is an amazing platform for networking." }
    ]
  };

  constructor(private contentApi: ContentApiService) {
    this.contentApi.getSiteContent('feedback', 'student-reviews').subscribe({
      next: (response) => {
        const content = response.data?.[0]?.data;
        if (content?.reviews?.length) {
          this.reviewData = {
            ...this.reviewData,
            ...content,
            reviews: content.reviews.filter((review: any) => review.status !== 'Archived' && review.status !== 'Draft')
          };
        }
      }
    });
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "arrows": false, 
    "responsive": [
      {
        "breakpoint": 1200,
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
