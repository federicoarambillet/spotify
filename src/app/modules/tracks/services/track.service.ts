import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import * as dataRaw from '../../../data/playlists.json';



@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataPlayLists$: Observable<TrackModel[]> = of([]);

  // dataTracksRandom$: Observable<any> = of([]);

  // constructor() {
  //   const { data }: any = (dataRaw as any).default;

  //   this.dataTracksTrending$ = of(data);

  //   this.dataTracksRandom$ = new Observable((observer) => {

  //     const trackExample: TrackModel = {
  //       _id: 9,
  //       name: 'name',
  //       album: 'album',
  //       url: '',
  //       cover: ''
  //     }

  //     observer.next([trackExample]);
  //   })
  // }

  private readonly URL = environment.api;

  constructor(private http: HttpClient) {

    const { data }: any = (dataRaw as any).default;
    this.dataPlayLists$ = of(data);

  }

  getAllPlaylist$(): Observable<any> {
    return this.dataPlayLists$;
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        // console.log(data)
        return data;
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data.reverse();
        }),
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
        // map((dataRevertida) => {
        //   return dataRevertida.filter((track: TrackModel) => track._id != 1);
        // })
      )
  }

}
