import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private userService: UserService
    
    ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    ut: new FormControl("", [Validators.required]),

  })

  login(usertype: string) {
    console.log(usertype);
    this.form.get('ut')?.setValue(usertype)

    console.log(this.form.value);
    this.userService.signin(this.form).subscribe(res => console.log(res)
    )

  }

}
