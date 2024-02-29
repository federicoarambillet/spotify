import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-banner-preview',
  templateUrl: './banner-preview.component.html',
  styleUrl: './banner-preview.component.css'
})

export class BannerPreviewComponent {

  @Input() token: boolean = false;

  constructor(
    private cookieService: CookieService
  ) {

  }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

}
