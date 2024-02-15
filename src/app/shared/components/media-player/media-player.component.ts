import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})

export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log(response)
      }

    )

    this.listObservers$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
