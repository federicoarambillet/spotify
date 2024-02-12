import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/tracks.model';

import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})

export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
    // const { data }: any = (dataRaw as any).default;
    // console.log(data);
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }
}
