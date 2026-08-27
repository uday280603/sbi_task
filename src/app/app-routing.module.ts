import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  }
  , {
    path : 'about',
    component : AboutComponent
  }
  ,
    {
    path : 'contact',
    component : ContactUsComponent
  },
    {
    path : 'login',
    loadChildren  : () => import('./module/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
