import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shout } from '../components/shouts/shout.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ShoutService {

 
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  
  addShout(c:Shout){
   return this.http.post<any>(this.config.shoutAddApi, JSON.stringify(c), { headers: this.config.header })
  }


  getAll():Observable<any>{
   return this.http.get(this.config.shoutGetAllApi, { headers: this.config.header })
  }

  getOne(id:string):Observable<any>{
    return this.http.get(this.config.shoutGetOneApi+id, { headers: this.config.header })
   }
 
  deleteCategory(c:Shout){
   return this.http.post<any>(this.config.shoutDeleteApi, JSON.stringify(c), { headers: this.config.header })
  }



}
