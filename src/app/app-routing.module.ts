import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'addcat', component: AddCategoryComponent },
  {
    path: 'signup', component: SignupComponent, children: [
      { path: '**', component: SignupComponent }
    ]

  },


  {
    path: '', component: HomeComponent, children: [
      {path:'dash', component: DashboardComponent },
      {path:'about', component: AboutComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
