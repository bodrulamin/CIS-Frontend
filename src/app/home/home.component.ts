import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../add-category/category.model';
import { ShoutPopupComponent } from '../shout-popup/shout-popup.component';
import { Shout } from '../shout-popup/shout.model';
  export interface DialogData {
    animal: string;
    name: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shout = new Shout()
  categories: any
  constructor(public dialog: MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
this.http.get<any>("http://localhost:8080/getAllCategories").subscribe(res=>{
  console.log(res);
  
  this.categories = res.data.category
})
  }

  openDialog(): void {
    this.shout = new Shout()
    const dialogRef = this.dialog.open(ShoutPopupComponent, {
      width: '50%',
      data: this.shout,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      
      this.addShout(result)
       
      
      
    });
  }

addShout(shout: Shout) {

  let s = new Shout()
  s.name = shout.name
  s.location = shout.location
  s.text = shout.text

   
}


}


