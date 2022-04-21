import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShowComponent } from './add-show/add-show.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ManageShowsComponent } from './manage-shows/manage-shows.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'mainpage', 
    component: MainpageComponent 
  },
  { 
    path: 'manager', 
    component: ManageShowsComponent 
  },
  {
    path: 'new',
    component: AddShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
