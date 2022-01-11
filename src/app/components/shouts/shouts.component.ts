import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ShoutService } from 'src/app/services/shout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {


  shouts: any
  constructor(
    private shoutService: ShoutService,
    private rout: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.shoutService.getAll().subscribe(res => {
      console.log(res);
      this.shouts = res.data.shout

    })
  }

  loginToShout() {
    if (this.userService.isLoggedIn()) {
      this.rout.navigate(['/addshout'])
    }else if(!this.userService.isLoggedIn()){
      this.rout.navigate(['/login'])
    }
  }

}
