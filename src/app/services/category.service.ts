import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../add-category/category.model';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  


    header = { "Content-Type": "application/json" }


  addCategory(c:Category){
   return this.http.post<any>(this.config.categoryAddApi, JSON.stringify(c), { headers: this.header })
  }


  getAll():Observable<any>{
   return this.http.get(this.config.categoryGetAllApi, { headers: this.header })
  }


  deleteCategory(c:Category){
   return this.http.post<any>(this.config.categoryDeleteApi, JSON.stringify(c), { headers: this.header })
  }




}
