import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    authYN = false

  loginUser(user) {
     return {status: "yes"}
    // return this.http.post<any>("", user)
   }
  loggedIn() {
    return !!localStorage.getItem('status')
    //return !!localStorage.getItem('sessionToken')
  }

  logout(){
   localStorage.removeItem('status')

  // return this.http.get<any>("jkl");
   // localStorage.removeItem('sessionToken')
  }
}
