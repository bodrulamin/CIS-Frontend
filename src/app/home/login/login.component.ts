import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private toast: ToastrService,
    private rout: Router

  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    usertype: new FormControl("", [Validators.required]),

  })

  login(usertype: string) {
    this.form.markAllAsTouched()
    console.log(usertype);
    this.form.get('usertype')?.setValue(usertype)

    console.log(this.form.value);
    if (this.form.valid) {
      this.userService.signin(this.form).subscribe(res => {

        console.log(res);
        

        if (res.status == 'success') {
          this.toast.success("Sign in successfull")
          this.rout.navigateByUrl("/")
        } else {
          this.toast.error("Signin failed !")
        }
      })
    } else {
      this.toast.error("Form is invalid !")
    }
}



  isError(contoller: string) {
    let c = this.form.get(contoller)
    if (c?.touched && c.invalid) {
      return true
    } else return false;
  }
}
