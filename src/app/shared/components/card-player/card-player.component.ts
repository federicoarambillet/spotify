import { Component, OnInit, Input, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() token: boolean = false;
  // @Input() track!: TrackModel;
  @Input() track: TrackModel = { _id: 0, name: '', album: '', duration: '', fecha_lanzamiento: '', url: '', cover: '' };

  multimediaService = inject(MultimediaService);

  constructor() { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    if (track) {
      this.multimediaService.trackInfoSignal.set(track);
    }
  }

}