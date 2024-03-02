import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit {

  @Input() token: boolean = false;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

}
