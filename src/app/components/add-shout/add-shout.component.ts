import { Component, OnInit } from '@angular/core';
import { ShoutService } from 'src/app/services/shout.service';
import { Shout } from '../shouts/shout.model';

@Component({
  selector: 'app-add-shout',
  templateUrl: './add-shout.component.html',
  styleUrls: ['./add-shout.component.css']
})
export class AddShoutComponent implements OnInit {

  shout = new Shout()
   constructor(
    private shoutService: ShoutService,

  ) { }

  ngOnInit(): void {
  }

  postShout(){
    this.shoutService.addShout(this.shout).subscribe(res=>{
      console.log(res);
      
    })
  }

}
