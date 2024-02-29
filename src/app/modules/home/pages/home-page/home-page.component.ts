import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

    @Input() token: boolean = false;

    constructor(
        private cookieService: CookieService
    ) {}

    ngOnInit(): void {
        this.token = this.cookieService.check('token');
    }

}