import { Injectable, NgModule } from '@angular/core';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './users/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://localhost:4200/WeatherForecast'
  constructor(private http: HttpClient) { }

  Enviar(): Observable<User> {
    return this.http.post<User>(this.url, User, httpOptions)
  }
}
