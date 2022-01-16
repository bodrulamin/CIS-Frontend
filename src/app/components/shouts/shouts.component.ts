import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShoutService } from 'src/app/services/shout.service';
import { UserService } from 'src/app/services/user.service';
import { Shout, ShoutStatus } from './shout.model';

@Component({
  selector: 'app-shouts',
  templateUrl: './shouts.component.html',
  styleUrls: ['./shouts.component.css']
})
export class ShoutsComponent implements OnInit {


  localUser: any
  shouts: any
  methodToGetShouts: any
  shoutStatus = ShoutStatus
  constructor(
    private shoutService: ShoutService,
    private rout: Router,
    public userService: UserService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.methodToGetShouts = this.reloadAllShout
    this.methodToGetShouts()

  }
  reloadShoutOfUser() {

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

  showText(s: Shout) {
    s.isReadmore = !s.isReadmore

  }

  start(s: Shout) {


    switch (s.status) {
      case ShoutStatus.started:
        this.toast.info("Issue solving process is already started!")
        break;

      case ShoutStatus.completed:
        this.toast.info("The issue is solved !")
        break;

      case ShoutStatus.draft:
        s.status = ShoutStatus.started
        s.actionTakerId = this.userService.getUserFromLocalStorate().id
        this.shoutService.updateShoutStatus(s).subscribe(res => {
          if (res.status == 'success') {
            this.toast.success("Issue is marked as started")
          }

        })
        break;
      default:
        break;
    }




  }
  markAsCompleted(s: Shout) {

    if (s.status == this.shoutStatus.draft) {
      this.toast.error("Please start the process first!")
    } else if (s.status == this.shoutStatus.started) {

      s.status = ShoutStatus.completed
      this.shoutService.updateShoutStatus(s).subscribe(res => {
      this.toast.success("Issue Marked as completed successfully !")

      })
    } else if (s.status == this.shoutStatus.completed) {
      s.status = ShoutStatus.completed
      this.toast.info("The issue is solved !")

    }



  }

  getStatusClass(s:Shout){
    switch (s.status) {
      case ShoutStatus.started:
       return "article-badge-item bg-info"
       

      case ShoutStatus.completed:
                  return "article-badge-item bg-success"  


      case ShoutStatus.draft:
           return "article-badge-item bg-danger"  
 
      default:
        break;
    }

return "article-badge-item bg-danger"
  }
}
