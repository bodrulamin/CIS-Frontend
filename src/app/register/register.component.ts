import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType = 'citizen'
  constructor(private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.queryParams.subscribe(params => {

      switch (params['userType']) {
        case 'citizen':
        case 'provider': this.userType = params['userType']
          break;
      }

    })
  }

}
