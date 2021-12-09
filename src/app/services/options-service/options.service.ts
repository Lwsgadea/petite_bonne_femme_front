import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/types')
  } 

  getGenres(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/genres')
  }

  getPlatforms(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/platforms')
  }

  getEditors(): Observable<Object> {
    return this.http.get('http://localhost:8000/api/editors')
  }
}
