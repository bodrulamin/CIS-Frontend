import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  shouts: Shout[] = []
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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

  this.shouts.push(s)
}


}


