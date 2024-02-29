import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-offline-page',
  templateUrl: './offline-page.component.html',
  styleUrl: './offline-page.component.css'
})

export class OfflinePageComponent {
  tracksTrending: Array<TrackModel> = [];

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  }

}
