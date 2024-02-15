import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@core/tracks.model';
// import * as dataRaw from '../../../data/tracks.json';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
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

  }

  getAllTrack$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
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
        // map((dataRevertida) => {
        //   return dataRevertida.filter((track: TrackModel) => track._id != 1);
        // })
      )
  }

}
