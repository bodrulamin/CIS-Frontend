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
  categoryGetOneApi = this.host + '/category/getOne/'

  shoutAddApi = this.host + '/shout/add'
  shoutUpdateApi = this.host + '/shout/update'
  shoutDeleteApi = this.host + '/shout/delete'
  shoutGetAllApi = this.host + '/shout/getAll'
  shoutGetOneApi = this.host + '/shout/getOne/'
  constructor() { }
}
