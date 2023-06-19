import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  existedUser: string[] = ['qqk6pro', 'gotthebang', 'username01'];

  constructor() { }

  checkExistUsername(username: string): Observable<boolean> {
    console.log("Trigger API call...");
    const isValid = this.existedUser.every(item => item !== username);
    return of(isValid);
  }
}
