import { AllrolesComponent } from './allroles/allroles.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { LoginComponent } from './login/login.component';
import { AddrolesComponent } from './addroles/addroles.component';
import { TestingcomponentComponent } from './testingcomponent/testingcomponent.component';
import { AuthGuard } from './auth.guard';


const routes : Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path :'login' ,component:LoginComponent},
  {path :'users' ,component:UsersComponent,canActivate :[AuthGuard]},
  {path :'allRoles' ,component:AllrolesComponent,canActivate :[AuthGuard]},
  {path :'testing' ,component:TestingcomponentComponent}
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }