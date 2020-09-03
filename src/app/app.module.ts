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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {AuthHeaderInterceptor} from './http-interceptor/auth-header.interceptor'

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
    FormsModule,
    NgSelectModule

  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass :AuthHeaderInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
