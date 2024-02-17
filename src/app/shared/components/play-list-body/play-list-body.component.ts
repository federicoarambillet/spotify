import { Component, OnInit, Input } from '@angular/core';
// import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})

export class PlayListBodyComponent implements OnInit {
  // tracks: TrackModel[] = [];
  // tracks: Array<TrackModel> = [];

  @Input() tracks: TrackModel[] = []

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor() { }

  ngOnInit(): void {
    // const { data }: any = (dataRaw as any).default;
    // this.tracks = data;
    // console.log(data)
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    // console.log(this.optionSort);

  }
}
