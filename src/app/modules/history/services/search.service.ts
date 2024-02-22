import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  // searchTracks$(term: string): Observable<any> {
  //   return this.http.get(`${this.URL}/tracks?src=${term}`).pipe(
  //     map((dataRaw: any) => dataRaw.data)
  //   )
  // }

  searchTracks$(term: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Bearer BQCurbmN6AC1mJ2Jjp6m_OABRViJzXOfI2beNVscKi7kgdEhyIkWAqAEbDCQAyc9S-9T-rxpHX_EkBpaCu4_Y03m7vGEt5VEmsDa5-q2MYVAY5lT0E0');

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, { headers })

  }
}
