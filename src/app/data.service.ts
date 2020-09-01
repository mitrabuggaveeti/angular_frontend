import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    authYN = false

  loginUser(user) {
     this.authYN = true
    return {status: "yes"}
   /// return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn() {
    return this.authYN    
  }
}
