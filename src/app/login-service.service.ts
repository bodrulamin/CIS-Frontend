import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http:HttpClient,

  ) { }


  host = 'http://localhost'
  port = '8080'
  signupApi = '/signup'
  loginApi = '/login'


  signup(){

  }

}
