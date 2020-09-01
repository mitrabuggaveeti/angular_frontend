import { Injectable } from '@angular/core';
import {User} from '../allClasses/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  
  loginUrl : string;
  allUsersDataUrl : string;
  constructor(private http:HttpClient) { }

  getLoginDetails(user : User){

    this.loginUrl = `http://httpbin.org/post`;
    return this.http.post<any>(this.loginUrl, user);
   // return [{email:'x@y.com',password:'123'},{email:'y@x.com',password:'456'}];
  }

  getAllUsersData(){
    
    this.allUsersDataUrl = ""
    return this.http.get<any>("jkl");
      // return [
      //     {
      //       name : "mitra",
      //       email : "xyz@a.com",
      //       password : '123',
      //       role : "pathalogist"
      //       },
      //       {
      //         name : "xyz",
      //         email : "xyz@a.com",
      //         password : '123',
      //         role : "pathalogist"
      //       },
      //       {
      //         name : "xyz",
      //         email : "xyz@a.com",
      //         password : '123',
      //         role : "pathalogist"
      //       }
      //   ]
    }

    getAllRolesData(){
    
      this.allUsersDataUrl = ""
     // return this.http.get<any>(this.allUsersDataUrl);
        return [
            {
              id : "1",
              rolename : "pathologist",
              description : 'keyword is used to iterate through each element or object from headers' 
            },
            {
              id : "1",
              rolename : "pathologist",
              description : 'keyword is used to iterate through each element or object from headers' 
            },
            {
              id : "1",
              rolename : "pathologist",
              description : 'keyword is used to iterate through each element or object from headers' 
            },
          ]
    }
}
