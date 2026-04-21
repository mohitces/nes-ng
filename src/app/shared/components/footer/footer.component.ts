import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerData = {
    "section_title": "Footer",
    "company_info": {
      "address": "4th Floor Bhagwan Sahay Complex, Sector-15 Noida-201301 Uttar Pradesh, Landmark: Opposite Metro Pillar No. 30, Above Central Bank",
      "email": "info@nexpertsolutions.com",
      "phones": [
        "+91-9582-801-239",
        "+91-8700-321-472",
        "+91-120-4182944",
        "+91-120-4281455"
      ]
    },
    "quick_links": {
      "title": "Quick Link",
      "links": [
        { "label": "Home", "url": "https://www.nexpertsolutions.com/" },
        { "label": "About Us", "url": "https://www.nexpertsolutions.com/about-us" },
        { "label": "Video Portal", "url": "https://netexpertsolutions.com/" },
        { "label": "Online Payment", "url": "https://pmny.in/JIZjgXkX1q1S" }
      ]
    },
    "job_guarantee_programs": {
      "title": "100% Job Guarantee Program",
      "links": [
        { "label": "NCNE Master Program", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program" },
        { "label": "Master Program In Security", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/master-program-in-security-online-course" },
        { "label": "Master Program In Cloud", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-cloud" },
        { "label": "Integrated CCIE Enterprise", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-enterprise" },
        { "label": "Integrated CCIE Security", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ccna-to-ccie-security" },
        { "label": "Multi-Vendor Firewall", "url": "https://www.nexpertsolutions.com/job-guarantee-courses/multi-vendor-firewall" }
      ]
    },
    "popular_courses": {
      "title": "Popular Courses",
      "links": [
        { "label": "CCNA", "url": "https://nexpertsolutions.com/cisco/ccna-certification-training-online" },
        { "label": "AWS Associate", "url": "https://nexpertsolutions.com/cloud/aws-associate-certification-online-training" },
        { "label": "Azure-104", "url": "https://nexpertsolutions.com/cloud/associate-az-104-certification-online-course" },
        { "label": "CCNP Enterprise", "url": "https://nexpertsolutions.com/cisco/ccnp-enterprise-online-course" },
        { "label": "CCIE Enterprise Infrastructure", "url": "https://www.nexpertsolutions.com/cisco/ccie-enterprise-infrastructure-course-online" },
        { "label": "Network Automation", "url": "https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training" }
      ]
    },
    "trending_courses": {
      "title": "Trending Courses",
      "links": [
        { "label": "CCNA Course", "url": "https://www.nexpertsolutions.com/cisco/ccna-certification-training-online" },
        { "label": "CCNP Enterprise Course", "url": "https://www.nexpertsolutions.com/cisco/ccnp-enterprise-online-course" },
        { "label": "CCNP Security Course", "url": "https://www.nexpertsolutions.com/cisco/ccnp-security-online-certification" },
        { "label": "CCNP Service Provider Course", "url": "https://www.nexpertsolutions.com/cisco/ccnp-service-provider-online-training-institute" },
        { "label": "CCNP Data-Center Course", "url": "https://www.nexpertsolutions.com/cisco/ccnp-data-center-training-course-online" },
        { "label": "CCNP Collaboration Course", "url": "https://www.nexpertsolutions.com/cisco/ccnp-collaboration-online-training" },
        { "label": "CCIE Enterprise Course", "url": "https://www.nexpertsolutions.com/cisco/ccie-enterprise-infrastructure-course-online" },
        { "label": "CCIE Security Course", "url": "https://www.nexpertsolutions.com/cisco/ccie-security-training-online" },
        { "label": "CCIE Service Provider Course", "url": "https://www.nexpertsolutions.com/cisco/ccie-service-provider-training-online" },
        { "label": "CCIE Data Center Course", "url": "https://www.nexpertsolutions.com/cisco/ccie-data-center-certification-online" },
        { "label": "AWS Associate Course", "url": "https://www.nexpertsolutions.com/cloud/aws-associate-certification-online-training" },
        { "label": "AWS Professional Course", "url": "https://www.nexpertsolutions.com/cloud/aws-professional-online-course" },
        { "label": "Azure Course", "url": "https://www.nexpertsolutions.com/cloud/microsoft-azure-az-104-certification-online-course" },
        { "label": "GCP Course", "url": "https://www.nexpertsolutions.com/cloud/gcp-online-course" },
        { "label": "GCA Course", "url": "https://www.nexpertsolutions.com/cloud/gca-online-training-course" },
        { "label": "Devnet Course", "url": "https://www.nexpertsolutions.com/cisco/devnet-associate-certification-course-online" },
        { "label": "Network Automation Course", "url": "https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training" },
        { "label": "Cisco-ISE Course", "url": "https://www.nexpertsolutions.com/cisco/ise-training-online-institute" },
        { "label": "SDWAN Course", "url": "https://www.nexpertsolutions.com/cisco/sd-wan-online-training-institute" },
        { "label": "ACI Course", "url": "https://www.nexpertsolutions.com/cisco/aci-online-training-course" },
        { "label": "SDAccess Course", "url": "https://www.nexpertsolutions.com/cisco/sd-access-certification-online-training" },
        { "label": "MCSA Course", "url": "https://www.nexpertsolutions.com/microsoft/mcsa-online-course-training" },
        { "label": "CCSA Course", "url": "https://www.nexpertsolutions.com/checkpoint/ccsa-online-training" },
        { "label": "CCSE Course", "url": "https://www.nexpertsolutions.com/checkpoint/ccse-online-course" },
        { "label": "PCNSE Course", "url": "https://www.nexpertsolutions.com/palo-alto/pcnse-online-course" },
        { "label": "PANORAMA Course", "url": "https://www.nexpertsolutions.com/palo-alto/panorama-certification-online-course" },
        { "label": "F5 101 Application Fundamental Course", "url": "https://www.nexpertsolutions.com/f5/f5-101-certification-online-training-course" },
        { "label": "F5 201 TMOS Administration Course", "url": "https://www.nexpertsolutions.com/f5/f5-201-training-course-online" },
        { "label": "301A & 301B LTM Course", "url": "https://www.nexpertsolutions.com/f5/301a-and-302b-ltm-training-online" },
        { "label": "F5 303 ASM Course", "url": "https://www.nexpertsolutions.com/f5/303-asm-online-certification" },
        { "label": "Segment Routing Course", "url": "https://www.nexpertsolutions.com/cisco/segment-routing-online-training" },
        { "label": "Nexus Course", "url": "https://www.nexpertsolutions.com/cisco/nexus-online-training-course" },
        { "label": "BGP Course", "url": "https://www.nexpertsolutions.com/cisco/bgp-online-course-training" },
        { "label": "MPLS Course", "url": "#" },
        { "label": "JNCIA Course", "url": "https://www.nexpertsolutions.com/juniper/jncia-junos-online-training" },
        { "label": "JNCIS Enterprise Course", "url": "https://www.nexpertsolutions.com/juniper/jncis-enterprise-training-online" },
        { "label": "JNCIS Security Course", "url": "https://www.nexpertsolutions.com/juniper/jncis-security-online-training" },
        { "label": "JNCIS Service Provider Course", "url": "https://www.nexpertsolutions.com/juniper/jncis-service-provider-online-certification" },
        { "label": "JNCIP Enterprise Course", "url": "https://www.nexpertsolutions.com/juniper/jncip-enterprise-online-course" },
        { "label": "JNCIP Security Course", "url": "https://www.nexpertsolutions.com/juniper/jncip-security-course-online" },
        { "label": "JNCIP Service Provider Course", "url": "https://www.nexpertsolutions.com/juniper/jncip-service-provider-certification-online-training" },
        { "label": "Devnet Associate Course", "url": "https://www.nexpertsolutions.com/cisco/devnet-associate-certification-course-online" },
        { "label": "Devnet Professional Course", "url": "https://www.nexpertsolutions.com/cisco/devnet-professional-certification-training-online" },
        { "label": "Devnet Expert Course", "url": "https://www.nexpertsolutions.com/cisco/devnet-expert-certification-online" },
        { "label": "VCA Course", "url": "https://www.nexpertsolutions.com/vmware/vca-certification-course-online" },
        { "label": "VCP Course", "url": "https://www.nexpertsolutions.com/vmware/vcp-training-online" },
        { "label": "A+ Course", "url": "https://www.nexpertsolutions.com/comptia/a-plus-online-training-course" },
        { "label": "N+ Course", "url": "https://www.nexpertsolutions.com/comptia/n-plus-certification-training-course" },
        { "label": "Server+ Course", "url": "https://www.nexpertsolutions.com/comptia/server-plus-online-certification" },
        { "label": "CASP Course", "url": "https://www.nexpertsolutions.com/comptia/casp-plus-certification-training-online" }
      ]
    },
    "vendors": {
      "title": "Vendor",
      "links": [
        { "label": "CISCO", "url": "https://www.nexpertsolutions.com/cisco" },
        { "label": "Checkpoint", "url": "https://www.nexpertsolutions.com/checkpoint" },
        { "label": "Microsoft", "url": "https://www.nexpertsolutions.com/microsoft" },
        { "label": "Juniper", "url": "https://www.nexpertsolutions.com/juniper" },
        { "label": "VMWare", "url": "https://www.nexpertsolutions.com/vmware" },
        { "label": "Comptia", "url": "https://www.nexpertsolutions.com/comptia" },
        { "label": "Cloud", "url": "https://www.nexpertsolutions.com/cloud" },
        { "label": "F5", "url": "https://www.nexpertsolutions.com/f5" },
        { "label": "Redhat", "url": "https://www.nexpertsolutions.com/redhat-linux-course-online" },
        { "label": "PaloAlto", "url": "https://nexpertsolutions.com/palo-alto" }
      ]
    },
    "policies": {
      "links": [
        { "label": "Terms of Use", "url": "https://www.nexpertsolutions.com/terms-and-conditions" },
        { "label": "Privacy Policy", "url": "https://www.nexpertsolutions.com/policy" },
        { "label": "Refund Policy", "url": "https://www.nexpertsolutions.com/refund-policy" },
        { "label": "Reschedule Policy", "url": "https://www.nexpertsolutions.com/reschedule-policy" }
      ]
    },
    "hr_contact": {
      "label": "Contact For Employee Verification",
      "contact_person": "Ms. Arshi",
      "email": "hr@nexpertsolutions.com"
    },
    "copyright": "©2024 Net Expert Solutions All Right Reserved",
    "whatsapp": {
      "label": "Chat with us on WhatsApp",
      "url": "https://api.whatsapp.com/send?phone=+91-9582-801-239&text=Hello%21%20"
    }
  };
}
