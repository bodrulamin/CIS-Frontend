import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  signin(form: FormGroup): Observable<any> {
    return this.http.post(this.config.signinApi, form.value, { headers: this.config.header })
  }

  signup(form: FormGroup): Observable<any> {
    return this.http.post(this.config.signupApi, form.value)
  }

  saveUserToLocalStorage(userString: string) {
    localStorage.setItem('user', userString);

  }
  userString: any
  getUserFromLocalStorate() {

    let lu = localStorage.getItem('user')
    if (lu != null) {
      this.userString = localStorage.getItem('user')
    }
    return this.userString;
  }

}
