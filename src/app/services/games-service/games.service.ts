import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesUrl = 'http://localhost:8000/api/games';

  constructor(private http: HttpClient) { }

  getGame(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/games', {})
  }
}
