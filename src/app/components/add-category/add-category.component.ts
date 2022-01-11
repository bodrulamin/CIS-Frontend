import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  c = new Category()
  constructor(
    private catService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  addcategory(){

    this.catService.addCategory(this.c).subscribe(res=>{
      console.log(res);
      
    })
  }

}
