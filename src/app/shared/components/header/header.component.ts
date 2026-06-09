import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  url: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeCategory: string = 'CISCO';

  menuData: MenuItem[] = [
    {
      "label": "All Courses",
      "url": "#",
      "children": [
        {
          "label": "CISCO",
          "url": "https://www.nexpertsolutions.com/cisco",
          "children": [
            { "label": "CCNA 200-301", "url": "https://www.nexpertsolutions.com/cisco/ccna-certification-training-online" },
            { "label": "CCNP ENTERPRISE", "url": "https://www.nexpertsolutions.com/cisco/ccnp-enterprise-online-course" },
            { "label": "CCNP SECURITY", "url": "https://www.nexpertsolutions.com/cisco/ccnp-security-online-certification" },
            { "label": "CCNP DATA CENTER", "url": "https://www.nexpertsolutions.com/cisco/ccnp-data-center-training-course-online" },
            { "label": "CCNP SERVICE PROVIDER", "url": "https://www.nexpertsolutions.com/cisco/ccnp-service-provider-online-training-institute" },
            { "label": "CCNP COLLABORATION", "url": "https://www.nexpertsolutions.com/cisco/ccnp-collaboration-online-training" },
            { "label": "CCIE ENTERPRISE INFRASTRUCTURE", "url": "https://www.nexpertsolutions.com/cisco/ccie-enterprise-infrastructure-course-online" },
            { "label": "CCIE SECURITY", "url": "https://www.nexpertsolutions.com/cisco/ccie-security-training-online" },
            { "label": "CCIE DATA CENTER", "url": "https://www.nexpertsolutions.com/cisco/ccie-data-center-certification-online" },
            { "label": "CCIE SERVICE PROVIDER", "url": "https://www.nexpertsolutions.com/cisco/ccie-service-provider-training-online" },
            { "label": "SD-WAN", "url": "https://www.nexpertsolutions.com/cisco/sd-wan-online-training-institute" },
            { "label": "SD-ACCESS", "url": "https://www.nexpertsolutions.com/cisco/sd-access-certification-online-training" },
            { "label": "ACI", "url": "https://www.nexpertsolutions.com/cisco/aci-online-training-course" },
            { "label": "VXLAN-EVPN", "url": "https://www.nexpertsolutions.com/cisco/vxlan-evpn-certification-online-course" },
            { "label": "NETWORK AUTOMATION & DEVOPS", "url": "https://www.nexpertsolutions.com/cisco/network-automation-devops-online-course-training" },
            { "label": "SEGMENT ROUTING", "url": "https://www.nexpertsolutions.com/cisco/segment-routing-online-training" },
            { "label": "ISE", "url": "https://www.nexpertsolutions.com/cisco/ise-training-online-institute" },
            { "label": "NEXUS", "url": "https://www.nexpertsolutions.com/cisco/nexus-online-training-course" },
            { "label": "BGP", "url": "https://www.nexpertsolutions.com/cisco/bgp-online-course-training" },
            { "label": "MPLS", "url": "https://www.nexpertsolutions.com/cisco/mpls-online-training" },
            { "label": "FirePower", "url": "https://www.nexpertsolutions.com/cisco/firepower-training-course-online" },
            { "label": "DEVNET Associate", "url": "https://www.devnet-expert.com/ccna-devnet-or-devnet-associate/" },
            { "label": "DEVNET Professional", "url": "https://www.devnet-expert.com/ccnp-devnet-or-devnet-professional/" },
            { "label": "DEVNET Expert", "url": "https://www.devnet-expert.com/ccie-devnet-or-devnet-expert/" }
          ]
        },
        {
          "label": "CHECKPOINT",
          "url": "https://www.nexpertsolutions.com/checkpoint",
          "children": [
            { "label": "CCSA", "url": "https://www.nexpertsolutions.com/checkpoint/ccsa-online-training" },
            { "label": "CCSE", "url": "https://www.nexpertsolutions.com/checkpoint/ccse-online-course" }
          ]
        },
        {
          "label": "MICROSOFT",
          "url": "https://www.nexpertsolutions.com/microsoft",
          "children": [
            { "label": "MCSA", "url": "https://www.nexpertsolutions.com/microsoft/mcsa-online-course-training" }
          ]
        },
        {
          "label": "JUNIPER",
          "url": "https://www.nexpertsolutions.com/juniper",
          "children": [
            { "label": "JNCIA", "url": "https://www.nexpertsolutions.com/juniper/jncia-junos-online-training" },
            { "label": "JNCIS ENTERPRISE", "url": "https://www.nexpertsolutions.com/juniper/jncis-enterprise-training-online" },
            { "label": "JNCIS SECURITY", "url": "https://www.nexpertsolutions.com/juniper/jncis-security-online-training" },
            { "label": "JNCIS SERVICE PROVIDER", "url": "https://www.nexpertsolutions.com/juniper/jncis-service-provider-online-certification" },
            { "label": "JNCIP ENTERPRISE", "url": "https://www.nexpertsolutions.com/juniper/jncip-enterprise-online-course" },
            { "label": "JNCIP SECURITY", "url": "https://www.nexpertsolutions.com/juniper/jncip-security-course-online" },
            { "label": "JNCIP SERVICE PROVIDER", "url": "https://www.nexpertsolutions.com/juniper/jncip-service-provider-certification-online-training" }
          ]
        },
        {
          "label": "VMware",
          "url": "https://www.nexpertsolutions.com/vmware",
          "children": [
            { "label": "VCA", "url": "https://www.nexpertsolutions.com/vmware/vca-certification-course-online" },
            { "label": "VCP", "url": "https://www.nexpertsolutions.com/vmware/vcp-training-online" }
          ]
        },
        {
          "label": "COMPTIA",
          "url": "https://www.nexpertsolutions.com/comptia",
          "children": [
            { "label": "A+", "url": "https://www.nexpertsolutions.com/comptia/a-plus-online-training-course" },
            { "label": "N+", "url": "https://www.nexpertsolutions.com/comptia/n-plus-certification-training-course" },
            { "label": "Server+", "url": "https://www.nexpertsolutions.com/comptia/server-plus-online-certification" },
            { "label": "CASP", "url": "https://www.nexpertsolutions.com/comptia/casp-plus-certification-training-online" }
          ]
        },
        {
          "label": "CLOUD",
          "url": "https://www.nexpertsolutions.com/cloud",
          "children": [
            { "label": "AWS ASSOCIATE", "url": "https://www.nexpertsolutions.com/cloud/aws-associate-certification-online-training" },
            { "label": "AWS PROFESSIONAL", "url": "https://www.nexpertsolutions.com/cloud/aws-professional-online-course" },
            { "label": "Microsoft Azure AZ-104", "url": "https://www.nexpertsolutions.com/cloud/microsoft-azure-az-104-certification-online-course" },
            { "label": "GCA", "url": "https://www.nexpertsolutions.com/cloud/gca-online-training-course" },
            { "label": "GCP", "url": "https://www.nexpertsolutions.com/cloud/gcp-online-course" }
          ]
        },
        {
          "label": "F5",
          "url": "https://www.nexpertsolutions.com/f5",
          "children": [
            { "label": "F5 101 Application Fundamental", "url": "https://www.nexpertsolutions.com/f5/f5-101-certification-online-training-course" },
            { "label": "F5 201 TMOS Administration", "url": "https://www.nexpertsolutions.com/f5/f5-201-training-course-online" },
            { "label": "301A & 301B LTM", "url": "https://www.nexpertsolutions.com/f5/301a-and-302b-ltm-training-online" },
            { "label": "F5 303 ASM", "url": "https://www.nexpertsolutions.com/f5/303-asm-online-certification" },
            { "label": "F5 302 GTM", "url": "https://www.nexpertsolutions.com/f5/302-gtm-online-training" }
          ]
        },
        {
          "label": "REDHAT-LINUX",
          "url": "https://www.nexpertsolutions.com/redhat-linux-course-online",
          "children": []
        },
        {
          "label": "PALO-ALTO",
          "url": "https://www.nexpertsolutions.com/palo-alto",
          "children": [
            { "label": "ACE", "url": "https://www.nexpertsolutions.com/palo-alto/ace-certification-online" },
            { "label": "PCNSE", "url": "https://www.nexpertsolutions.com/palo-alto/pcnse-online-course" },
            { "label": "Panorama", "url": "https://www.nexpertsolutions.com/palo-alto/panorama-certification-online-course" }
          ]
        },
        {
          "label": "Most Popular Combo",
          "url": "#",
          "children": [
            { "label": "Cisco-ACI Zero To Hero", "url": "https://www.nexpertsolutions.com/cisco/cisco-aci-foundation-to-advanced-training" },
            { "label": "AWS Associate + Professional", "url": "#" },
            { "label": "CCNA CCNP Enterprise", "url": "#" }
          ]
        }
      ]
    },
    {
      "label": "DevNet Expert",
      "url": "http://www.devnet-expert.com/",
      "children": []
    },
    {
      "label": "One-Stop Course",
      "url": "https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program",
      "children": []
    },
    {
      "label": "Video Portal",
      "url": "https://netexpertsolutions.com/",
      "children": []
    },
    {
      "label": "Blogs",
      "url": "/blogs",
      "children": []
    },
    {
      "label": "Contact Us",
      "url": "/contact",
      "children": []
    }
  ];

  get allCoursesItem() {
    return this.menuData.find(item => item.label === 'All Courses');
  }

  get activeCategoryData() {
    return this.allCoursesItem?.children?.find(cat => cat.label === this.activeCategory);
  }

  setActiveCategory(label: string) {
    this.activeCategory = label;
  }

  toSlug(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
