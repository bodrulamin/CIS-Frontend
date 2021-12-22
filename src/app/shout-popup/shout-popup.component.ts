import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Shout } from './shout.model';
@Component({
  selector: 'app-shout-popup',
  templateUrl: './shout-popup.component.html',
  styleUrls: ['./shout-popup.component.css']
})
export class ShoutPopupComponent implements OnInit {
 

  constructor(public dialogRef: MatDialogRef<ShoutPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public shout: Shout) {
      
     }



  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
