import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  public mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {
      defaultOptions: [],
      accessLink: []
    }

  customOptions: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil material-symbols-outlined',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil material-symbols-outlined',
        router: ['/', 'history']
      },
      // {
      //   name: 'Tu biblioteca',
      //   icon: 'uil uil-chart',
      //   router: ['/', 'favorites'],
      //   query: { hola: 'mundo' }
      // }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Your Library',
        icon: ''
      },
      // {
      //   name: 'Canciones que te gustan',
      //   icon: 'uil-heart-medical'
      // }
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
}
