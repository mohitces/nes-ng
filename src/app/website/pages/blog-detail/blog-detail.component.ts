import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, ContentApiService } from '../../services/content-api.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  post?: BlogPost;
  loading = true;

  constructor(private route: ActivatedRoute, private contentApi: ContentApiService) {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      if (!slug) {
        this.loading = false;
        return;
      }

      this.contentApi.getBlog(slug).subscribe({
        next: (response) => {
          this.post = response.data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }
}
