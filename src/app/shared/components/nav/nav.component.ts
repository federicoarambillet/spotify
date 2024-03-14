import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit {

  @Input() token: boolean = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

  login() {
    this.router.navigate(['/auth/login'])
  }
}
