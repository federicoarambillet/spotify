import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit {

  @Input() token: boolean = false;
  listResults$: Observable<any> = of([])


  constructor(
    private cookieService: CookieService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

  login() {
    this.router.navigate(['/auth/login'])
  }

  logOut(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/offline'])
  }

  receiveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event);
  }

}
