import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from './category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  c = new Category()
  constructor(
    private http: HttpClient,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }


  addCategory() {

    const header = { "Content-Type": "application/json" }
    this.http.post<any>("http://localhost:8080/addcat", JSON.stringify(this.c), { headers: header }).subscribe(res => {
      console.log(res);
      this.toast.success("Category added !");
      this.c = new Category()

    })
  }

}
