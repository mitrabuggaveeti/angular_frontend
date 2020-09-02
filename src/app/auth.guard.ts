import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //  data
  // constructor(x){
  //   this.data =x 
  // }

  constructor(private authserv: DataService){

  }
  canActivate(){
    //console.log(this.data)
    // var token = localStorage.getItem('jwt')
    // console.log("this is jwt "+token)
    // if(token!=="mitra"){
    //   window.location.href = "/login";
    //   return false
    // }
    // console.log(this.authserv.loggedIn)
    // if(this.authserv.loggedIn) return true
    // else {
    //   window.location.href = "/login"
    //   return false
    // }
    console.log(this.authserv.loggedIn())
    if(this.authserv.loggedIn())
    return true
    else{
      window.location.href = "/login"
      return false
    }
  }
  
  
}
