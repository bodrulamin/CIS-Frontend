import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  header = { "Content-Type": "application/json" }

  host = 'http://localhost:8080'

  signupApi = this.host + '/signup'
  signinApi = this.host + '/signin'


  categoryAddApi = this.host + '/category/add'
  categoryUpdateApi = this.host + '/category/update'
  categoryDeleteApi = this.host + '/category/delete'
  categoryGetAllApi = this.host + '/category/getAll'
  categoryGetOneApi = this.host + '/category/getOne/'

  shoutAddApi = this.host + '/shout/add'
  shoutUpdateApi = this.host + '/shout/update'
  shoutDeleteApi = this.host + '/shout/delete'
  shoutGetAllApi = this.host + '/shout/getAll'
  shoutGetOneApi = this.host + '/shout/getOne/'
  shoutUpdateStatusApi = this.host + '/shout/updatestatus'

  constructor(private toast:ToastrService) { }

  showToast(res: any) {
    switch (res.status) {
      case 'success':
        this.toast.success(res.msg)

        break;
      case 'failed':
        this.toast.error(res.msg)

        break;

      default:
        break;
    }
  }
  
}
