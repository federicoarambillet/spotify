import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackService } from '@modules/tracks/services/track.service';


@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})

export class FavoritePageComponent implements OnInit {
  listResults$: Observable<any> = of([])

constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

   loadDataAll(): void {
    this.listResults$ =  this.trackService.getAllTracks$();
  }
}