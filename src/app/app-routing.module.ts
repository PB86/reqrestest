import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';

const routes: Routes = [
  {path:"",component:UserloginComponent},
  //{path:"userlogin",component:UserloginComponent},
  {path:"admin",component:AdminComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
