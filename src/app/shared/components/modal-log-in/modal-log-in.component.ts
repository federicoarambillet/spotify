import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { TrackModel } from '@core/models/tracks.model';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-modal-log-in',
  templateUrl: './modal-log-in.component.html',
  styleUrl: './modal-log-in.component.css'
})

export class ModalLogInComponent {
  private token: boolean = false;
  //Injection to use the data of the component using the dialog
  constructor(@Inject(MAT_DIALOG_DATA)
    public data: { track: TrackModel },
    private cookieService: CookieService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

  login() {
    // console.log('test')
    if (!this.token) {
      this.router.navigate(['/auth/login'])
    }

 
  }

}
