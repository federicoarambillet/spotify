import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  // @Input() track!: TrackModel;
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };


  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    this.multimediaService.callback.emit(track);
  }
}