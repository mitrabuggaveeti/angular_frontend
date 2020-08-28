import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { AllrolesComponent } from './allroles/allroles.component';
import { LoginComponent } from './login/login.component';
import { AddrolesComponent } from './addroles/addroles.component';
import { TestingcomponentComponent } from './testingcomponent/testingcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    AllrolesComponent,
    LoginComponent,
    AddrolesComponent,
    TestingcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
