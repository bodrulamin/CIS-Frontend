import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  header = { "Content-Type": "application/json" }

  host = 'http://localhost:8080'

  signupApi = this.host + '/signup'
  signinApi = this.host + '/signin'


  categoryAddApi = this.host + '/category/add'
  categoryUpdateApi = this.host + '/category/update'
  categoryDeleteApi = this.host + '/category/delete'
  categoryGetAllApi = this.host + '/category/getAll'


  constructor() { }
}
