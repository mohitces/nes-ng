import { Component } from '@angular/core';

@Component({
  selector: 'app-placement-companies',
  templateUrl: './placement-companies.component.html',
  styleUrl: './placement-companies.component.scss'
})
export class PlacementCompaniesComponent {
  data = {
    "section_title": "Placement Companies",
    "tagline": "Every 8th Network Security Engineer Working in MNC in Delhi NCR is a student of NES.",
    "total_images": 17,
    "images": [
      { "index": 1, "url": "https://www.nexpertsolutions.com/assets/img/CCIE-Enterprise-Infrastructure-Online-Institute.webp" },
      { "index": 2, "url": "https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Training.webp" },
      { "index": 3, "url": "https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Cources.webp" },
      { "index": 4, "url": "https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Certification.webp" },
      { "index": 5, "url": "https://www.nexpertsolutions.com/assets/img/CCIE-Service-Provider-Online-Institute.webp" },
      { "index": 6, "url": "https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Training.webp" },
      { "index": 7, "url": "https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Cources.webp" },
      { "index": 8, "url": "https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Certification.webp" },
      { "index": 9, "url": "https://www.nexpertsolutions.com/assets/img/SD-WAN-Online-Institute.webp" },
      { "index": 10, "url": "https://www.nexpertsolutions.com/assets/img/Devnet-Online-Training.webp" },
      { "index": 11, "url": "https://www.nexpertsolutions.com/assets/img/Devnet-Online-Cources.webp" },
      { "index": 12, "url": "https://www.nexpertsolutions.com/assets/img/Devnet-Online-Certification.webp" },
      { "index": 13, "url": "https://www.nexpertsolutions.com/assets/img/Devnet-Online-Institute.webp" },
      { "index": 14, "url": "https://www.nexpertsolutions.com/assets/img/Cisco-ACI-Online-Training.webp" },
      { "index": 15, "url": "https://www.nexpertsolutions.com/assets/img/Cisco-ACI-Online-Cources.webp" },
      { "index": 16, "url": "https://www.nexpertsolutions.com/assets/img/Cisco-ACI-Online-Certification.webp" },
      { "index": 17, "url": "https://www.nexpertsolutions.com/assets/img/AWS-Online-Training.webp" }
    ]
  };

  r1 = this.data.images.slice(0, 6);
  r2 = this.data.images.slice(6, 12);
  r3 = this.data.images.slice(12, 17);

  // Amplified arrays so they easily fill wide screens, creating seamless looping
  row1 = [...this.r1, ...this.r1, ...this.r1, ...this.r1, ...this.r1];
  row2 = [...this.r2, ...this.r2, ...this.r2, ...this.r2, ...this.r2];
  row3 = [...this.r3, ...this.r3, ...this.r3, ...this.r3, ...this.r3];
}
