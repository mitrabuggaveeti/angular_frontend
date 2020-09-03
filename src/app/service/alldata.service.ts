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
    
    // this.allUsersDataUrl = ""
     //return this.http.get<any>("jkl");
      return [
          {
            name : "mitra",
            email : "xyz@a.com",
            password : '123',
           // roles : ["pathalogist","role2","role3"],
            roles : [{
              id : 1,
              rolename : "pathologist",
              description : 'keyword is used to iterate through each element or object from headers'
              },
              {
                id : 2,
                rolename : "Lab tech",
                description : 'keyword is used to iterate through each element or object from headers'
              }]
            },
            {
              name : "Sai praneeth",
              email : "abc@a.com",
              password : '123',
             // roles : ["pathalogist","role2","role3"],
              roles : [{
                id : 3,
                rolename : "Admin",
                description : 'keyword is used to iterate through each element or object from headers'
                }]
              }
        ]
    }

    getAllRoles(){

      //return this.http.get<any>("jkl");
      return [
                {
                  id : 1,
                  rolename : "pathologist",
                  description : 'keyword is used to iterate through each element or object from headers' 
                },
                {
                  id : 2,
                  rolename : "Admin",
                  description : 'keyword is used to iterate through each element or object from headers' 
                },
                {
                  id : 3,
                  rolename : "Lab tech",
                  description : 'keyword is used to iterate through each element or object from headers' 
                },
                {
                  id : 4,
                  rolename : "Role4",
                  description : 'keyword is used to iterate through each element or object from headers' 
                }
              ]
    }

    getAllRolesData(){
     // return this.http.get<any>("jkl");

    //   this.allUsersDataUrl = ""
    //  // return this.http.get<any>(this.allUsersDataUrl);
        return [
            {
              id : 1,
              rolename : "pathologist",
              description : 'keyword is used to iterate through each element or object from headers' 
            },
            {
              id : 2,
              rolename : "Lab tech",
              description : 'keyword is used to iterate through each element or object from headers' 
            },
            {
              id : 3,
              rolename : "Admin",
              description : 'keyword is used to iterate through each element or object from headers' 
            }
          ]
    }

    addNewUser(user){
       return this.http.post<any>("jkl",user);
    }
    
    addEditedUser(editeduser){
         return this.http.post<any>("",editeduser)
    }
    
    deleteUser(delUser){
         return this.http.post<any>("",delUser)
    }
     
    addRole(role){
      //return this.http.post<any>("",role)
      return role
    }
}

/*

users collection :
 {
   {
   name : "xyz",
   pssw : "123",
   email : "qwe@efd",
   roles : [
           ObjectId("12852963"),
           ObjectId("12852852")
           ]
   },
   {
   name : "abc",
   pssw : "123",
   email : "qwe@efd",
   roles : [
           ObjectId("12852963")
           ]
   }
  }

  roles collection :

  {
    {
      id :12852963,
      rolename: "role1"
      description : "qwertyuwertyert"
    }
    {
      id :12852852,
      rolename: "role2"
      description : "qwertyuwertyert"
    }
  }



*/
