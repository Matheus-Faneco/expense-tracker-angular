import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = 'http://127.0.0.1:8000/api/token/';
  authRefreshUrl: string = 'http://127.0.0.1:8000/api/token/refresh/';



  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.authUrl, { username,
      password }).pipe(
      tap(res => {
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
      })
    );
  }

  loginRefreshToken(){
    return this.http.post<any>(this.authRefreshUrl, { refresh: localStorage.getItem('refresh_token') })
  }


}
