import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';
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
    private toast: ToastrService,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }


  addCategory() {

    this.categoryService.addCategory(this.c).subscribe(res => {
      console.log(res);
      this.toast.success(res.msg);
      this.c = new Category()

    })
  }

}
