import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  fg = new FormGroup({
    username: new FormControl("", [Validators.pattern("[a-zA-Z0-9]{6,20}")]),
    password: new FormControl("", [Validators.pattern("[a-zA-Z0-9]{6,20}")]),
    usertype: new FormControl("", [Validators.required]),


  })
  constructor(
    private userService: UserService,
    private rout: Router
  ) { }

  ngOnInit(): void {
  }

  login(ut:string){
    console.log(this.fg.value);
    this.fg.get('usertype')?.setValue(ut)

    this.userService.signin(this.fg).subscribe(res=>{
      console.log(res);
    
      if(res.status == 'success'){
        this.userService.saveUserToLocalStorage(JSON.stringify(res.data))
        this.rout.navigate(['/'])
      }
      else{
        
      }
    })

    
  }
}
