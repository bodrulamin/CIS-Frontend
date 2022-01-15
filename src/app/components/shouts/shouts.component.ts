import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ShoutService } from 'src/app/services/shout.service';
import { UserService } from 'src/app/services/user.service';
import { Shout } from './shout.model';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {


  localUser :any
  shouts: any
  methodToGetShouts:any
  constructor(
    private shoutService: ShoutService,
    private rout: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.methodToGetShouts = this.reloadAllShout
    this.methodToGetShouts()

  }
   reloadShoutOfUser () {

    this.localUser = this.userService.getUserFromLocalStorate()

    this.shoutService.getAllOf(this.localUser.id).subscribe(res => {
      console.log(res);
      this.shouts = res.data.shout

    })
  }
reloadAllShout() {

    this.localUser = this.userService.getUserFromLocalStorate()

    this.shoutService.getAll().subscribe(res => {
      console.log(res);
      this.shouts = res.data.shout

    })
  }

  loginToShout() {
    if (this.userService.isLoggedIn()) {
      this.rout.navigate(['/addshout'])
    } else if (!this.userService.isLoggedIn()) {
      this.rout.navigate(['/login'])
    }
  }
  delete(s: Shout) {
    this.shoutService.deleteShout(s).subscribe(res => {
      console.log(res);
      this.methodToGetShouts()
    })
  }


  edit(s: Shout) {
    this.rout.navigate(['/addshout'], { state: { shout: s } })
  }

  showText(s:Shout){
    s.isReadmore = !s.isReadmore
   
  }
}
