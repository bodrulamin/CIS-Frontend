import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
import { User } from './user.model';
import { UserType } from './usertype.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {
  userType: string = '';

   
  user = new User();
  form: FormGroup = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    usertype: new FormControl("", [Validators.required]),

  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private rout: Router,
    private toast: ToastrService,
    private userService: UserService

  ) { }


  ngOnInit(): void {
    this.setUserType();

  }

  signup() {

    this.form.markAllAsTouched()

    this.form.get('usertype')?.setValue(this.userType.toLocaleLowerCase())

    console.log(this.form.value);
    
    if (this.form.valid) {
      this.userService.signup(this.form).subscribe(res => {
        console.log(res);

        if (res.status == 'success') {
          this.toast.success("Signup successfull")
          this.rout.navigateByUrl("/login")
        } else {
          this.toast.error("Signup failed !")
        }

      })
    }
    else {
      this.toast.error("Form is invalid !")

    }


  }

  isError(contoller: string) {
    let c = this.form.get(contoller)
    if (c?.touched && c.invalid) {
      return true
    } else return false;
  }

  setUserType() {

    this.activatedRoute.queryParams.subscribe(params => {

      console.log(params['ut']);

      let ut = params['ut'];

      if (ut == 'citizen') {
        this.userType = 'Citizen';
        

      } else if (ut == 'provider') {
        this.userType = 'Provider';
       
      } else {
        this.rout.navigateByUrl("/login")
      }

    })

  }

}
