import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string
  constructor() { }

  checkLogin(): boolean {
    return Boolean(localStorage.getItem(TOKEN));
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        localStorage.setItem(TOKEN, 'xxx');
        return true;
      })
    )
  }

  logout(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.isLoggedIn = false;
      localStorage.setItem(TOKEN, '');
      observer.next(true);
    })
  }
}
