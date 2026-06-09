import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ALL_COURSE_PAGES } from '../../data/all-course-pages.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('courseCombobox') courseCombobox?: ElementRef<HTMLElement>;

  officeAddress =
    '4th Floor Bhagwan Sahay Complex, Sector-15 Noida-201301 Uttar Pradesh, Landmark: Opposite Metro Pillar No. 30, Above Central Bank';
  mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=4th%20Floor%20Bhagwan%20Sahay%20Complex%2C%20Sector-15%20Noida-201301%20Uttar%20Pradesh';
  mapEmbedUrl =
    'https://maps.google.com/maps?q=4th%20Floor%20Bhagwan%20Sahay%20Complex%2C%20Sector-15%20Noida-201301%20Uttar%20Pradesh&z=15&output=embed';
  safeMapEmbedUrl: SafeResourceUrl;

  email = 'info@nexpertsolutions.com';
  phones = ['+91-9582-801-239', '+91-8700-321-472', '+91-120-4182944', '+91-120-4281455'];
  whatsappUrl = 'https://api.whatsapp.com/send?phone=+91-9582-801-239&text=Hello%21%20';
  hrContact = { name: 'Ms. Arshi', email: 'hr@nexpertsolutions.com' };
  jobGuaranteeUrl = 'https://www.nexpertsolutions.com/job-guarantee-courses/ncne-master-program';

  trainingModes = ['Class Room', 'Onsite', 'Online', 'Corporate'];

  courses = [
    ...ALL_COURSE_PAGES.map((course) => course.title),
    'CCIE Collaboration',
    'CCIE Enterprise Wireless',
    'CCNP Cloud',
    'MCSE',
    'Exchange Server',
    'Linux (RHCE)',
    'VCA NV',
    'VCA DC',
    'VCP NV',
    'VCP DC',
    'VCAP NSX',
    'Security+',
    'CEH',
    'CISA',
    'CISM',
    'CISSP',
    'Prince 2',
    'ITIL',
    'PMP',
    'CWS-215',
    'CWS-315',
    'Other'
  ];

  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  courseDropdownOpen = false;
  courseSearchTerm = '';

  quickActions = [
    {
      label: 'Call',
      icon: 'call',
      href: 'tel:+919582801239',
      variant: 'primary'
    },
    {
      label: 'WhatsApp',
      icon: 'chat',
      href: this.whatsappUrl,
      variant: 'outline'
    },
    {
      label: 'Free Demo',
      icon: 'play_circle',
      href: this.whatsappUrl,
      variant: 'dark'
    }
  ];

  contactCards = [
    {
      title: 'Reach Us',
      icon: 'location_on',
      content: this.officeAddress,
      action: { label: 'Get directions', href: this.mapsUrl }
    },
    {
      title: 'Drop A Mail',
      icon: 'mail',
      content: this.email,
      action: { label: 'Send email', href: `mailto:${this.email}` }
    },
    {
      title: 'Make A Call',
      icon: 'phone_in_talk',
      content: this.phones.join(' · '),
      action: { label: 'Call now', href: 'tel:+919582801239' }
    },
    {
      title: 'Employee Verification',
      icon: 'badge',
      content: `Contact: ${this.hrContact.name}`,
      action: { label: this.hrContact.email, href: `mailto:${this.hrContact.email}` }
    }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.safeMapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapEmbedUrl);

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[\d\s+\-()]{8,20}$/)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      course: ['', Validators.required],
      trainingMode: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  get filteredCourses(): string[] {
    const query = this.courseSearchTerm.trim().toLowerCase();
    if (!query) {
      return this.courses;
    }
    return this.courses.filter((course) => course.toLowerCase().includes(query));
  }

  get selectedCourse(): string {
    return this.contactForm.get('course')?.value || '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.courseDropdownOpen) {
      return;
    }
    const target = event.target as Node;
    if (this.courseCombobox?.nativeElement.contains(target)) {
      return;
    }
    this.closeCourseDropdown();
  }

  openCourseDropdown() {
    this.courseDropdownOpen = true;
    this.courseSearchTerm = this.selectedCourse;
  }

  closeCourseDropdown() {
    this.courseDropdownOpen = false;
    this.courseSearchTerm = this.selectedCourse;
  }

  onCourseSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.courseSearchTerm = value;
    this.courseDropdownOpen = true;
    this.contactForm.get('course')?.setValue(value);
    this.contactForm.get('course')?.markAsTouched();
  }

  selectCourse(course: string) {
    this.contactForm.get('course')?.setValue(course);
    this.courseSearchTerm = course;
    this.courseDropdownOpen = false;
    this.contactForm.get('course')?.markAsTouched();
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  getError(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'This field is required.';
    }
    if (control.errors['email']) {
      return 'Enter a valid email address.';
    }
    if (control.errors['minlength']) {
      const required = control.errors['minlength'].requiredLength;
      return `Minimum ${required} characters required.`;
    }
    if (control.errors['maxlength']) {
      const allowed = control.errors['maxlength'].requiredLength;
      return `Maximum ${allowed} characters allowed.`;
    }
    if (control.errors['pattern']) {
      if (controlName === 'phone') {
        return 'Enter a valid phone number (8-20 digits).';
      }
      return 'Invalid format.';
    }
    if (control.errors['courseNotFound']) {
      return 'Select a course from the list or choose Other.';
    }
    return 'Invalid value.';
  }

  private validateCourseSelection(): boolean {
    const courseControl = this.contactForm.get('course');
    const value = (courseControl?.value || '').trim();

    if (!value) {
      courseControl?.setErrors({ required: true });
      return false;
    }

    const isValidCourse = this.courses.some(
      (course) => course.toLowerCase() === value.toLowerCase()
    );

    if (!isValidCourse) {
      courseControl?.setErrors({ courseNotFound: true });
      return false;
    }

    const matchedCourse = this.courses.find(
      (course) => course.toLowerCase() === value.toLowerCase()
    );
    if (matchedCourse) {
      courseControl?.setValue(matchedCourse, { emitEvent: false });
      this.courseSearchTerm = matchedCourse;
    }
    courseControl?.setErrors(null);

    return true;
  }

  onSubmit() {
    this.submitted = true;
    this.submitSuccess = false;
    this.contactForm.markAllAsTouched();

    const courseValid = this.validateCourseSelection();
    if (!this.contactForm.valid || !courseValid) {
      if (!courseValid) {
        this.courseDropdownOpen = true;
      }
      return;
    }

    this.submitSuccess = true;
    this.contactForm.reset();
    this.courseSearchTerm = '';
    this.submitted = false;
    this.courseDropdownOpen = false;
  }
}
