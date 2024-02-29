import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  @Input() token: boolean = false;

  public mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {
      defaultOptions: [],
      accessLink: []
    }

  customOptions: Array<any> = [];

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil material-symbols-outlined',
        router: ['/', 'tracks']
      },
      {
        name: 'Search',
        icon: 'uil material-symbols-outlined',
        router: ['/', 'history']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Your Library',
        icon: ''
      }
    ]

    this.customOptions = [
      {
        name: 'Legal',
        router: ['/']
      },
      {
        name: 'Privacy Center',
        router: ['/']
      },
      {
        name: 'Privacy Policy',
        router: ['/']
      },
      {
        name: 'Cookies',
        router: ['/']
      }
      ,
      {
        name: 'About Ads',
        router: ['/']
      }
      ,
      {
        name: 'Accessibility',
        router: ['/']
      }
      ,
      {
        name: 'Notice at Collection',
        router: ['/']
      }
      ,
      {
        name: 'Your Privacy Choices',
        router: ['/']
      }
      ,
      {
        name: 'Cookies',
        router: ['/']
      }
    ]

  }

  goTo($event: any): void {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/', 'favorites']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
