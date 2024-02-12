import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  // @Input() track!: TrackModel;
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  constructor() { }

  ngOnInit(): void {
  }

}