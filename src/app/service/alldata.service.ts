import { Injectable } from '@angular/core';
import {User} from '../allClasses/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  

  constructor(private http:HttpClient) { }

  getLoginDetails(user : User){

    return [{email:'x@y.com',password:'123'},{email:'y@x.com',password:'456'}];
  }
}
