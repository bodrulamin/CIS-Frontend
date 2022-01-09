import { Component, OnInit } from '@angular/core';
import { ShoutService } from 'src/app/services/shout.service';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {


  shouts: any
  constructor(
    private shoutService: ShoutService,

  ) { }

  ngOnInit(): void {
  
    this.shoutService.getAll().subscribe(res=>{
      console.log(res);
      this.shouts = res.data.shout
      
    })
  }

}
