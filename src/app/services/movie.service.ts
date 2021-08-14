import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../Movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:5000/api/movies';

  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl)
  }
}
