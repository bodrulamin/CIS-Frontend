import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './user.model';

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

  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private rout: Router,
    private toast: ToastrService

  ) { }


  ngOnInit(): void {
    this.setUserType();

  }

  signup() {

    this.form.markAllAsTouched()
    this.user = this.form.value
    console.log(this.form.value);

    const header = { 'Content-Type': 'application/json' }
    console.log(this.user);


    if (this.form.valid) {
      this.http.post<any>("http://localhost:8080/signup", JSON.stringify(this.user), { headers: header }).subscribe(res => {
      
        if(res.status == 'success'){
          this.toast.success("Login successfull")
          this.rout.navigateByUrl("/")
        }else{
            this.toast.error("Login failed !")
        }

      })
    }
    else {
     this.toast.error("Form is invalid !")

    }





  }

isError(contoller:string){
  let c = this.form.get(contoller)
  if(c?.touched && c.invalid){
    return true
  }else return false;
}

  setUserType() {

    this.activatedRoute.queryParams.subscribe(params => {

      console.log(params['ut']);

      let ut = params['ut'];

      if (ut == 'citizen') {
        this.userType = 'Citizen';

      } else if (ut == 'provider') {
        this.userType = 'Provider';
      }else {
          this.rout.navigateByUrl("/login")        
      }

    })

  }

}
