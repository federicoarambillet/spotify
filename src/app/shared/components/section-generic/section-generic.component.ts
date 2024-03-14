import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit {
  @Input() token: boolean = false;

  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() limit: number = 10
  @Input() dataTracks: Array<TrackModel> = [];

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.token = this.cookieService.check('token');
  }

}
