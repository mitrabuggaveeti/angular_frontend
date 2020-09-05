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
     return this.http.get<any>("http://127.0.0.1:5000/info");
      // return [
      //     {
      //       name : "mitra",
      //       email : "xyz@a.com",
      //       password : '123',
      //      // roles : ["pathalogist","role2","role3"],
      //       roles : [{
      //         id : 1,
      //         rolename : "pathologist",
      //         description : 'keyword is used to iterate through each element or object from headers'
      //         },
      //         {
      //           id : 3,
      //           rolename : "Lab tech",
      //           description : 'keyword is used to iterate through each element or object from headers'
      //         }]
      //       },
      //       {
      //         name : "Sai praneeth",
      //         email : "abc@a.com",
      //         password : '123',
      //        // roles : ["pathalogist","role2","role3"],
      //         roles : [{
      //           id : 2,
      //           rolename : "Admin",
      //           description : 'keyword is used to iterate through each element or object from headers'
      //           }]
      //         }
      //   ]


      // return [
      //       {
      //         name : "mitra",
      //         email : "xyz@a.com",
      //         password : '123',
      //       // roles : ["pathalogist","role2","role3"],
      //         roles : [1 , 2 ,3]
      //           },
      //       {
      //         name : "mitra",
      //         email : "xyz@a.com",
      //         password : '123',
      //        // roles : ["pathalogist","role2","role3"],
      //         roles : [1 , 2 ,3]
      //           },

      // ]
    }

    getAllRoles(){

      return this.http.get<any>("http://127.0.0.1:5000/infoRoles");
      // return [
      //           {
      //             id : 1,
      //             rolename : "pathologist",
      //             description : 'keyword is used to iterate through each element or object from headers' 
      //           },
      //           {
      //             id : 2,
      //             rolename : "Admin",
      //             description : 'keyword is used to iterate through each element or object from headers' 
      //           },
      //           {
      //             id : 3,
      //             rolename : "Lab tech",
      //             description : 'keyword is used to iterate through each element or object from headers' 
      //           },
      //           {
      //             id : 4,
      //             rolename : "Role4",
      //             description : 'keyword is used to iterate through each element or object from headers' 
      //           }
      //         ]
      // return [
      //   {
      //      _id : "abc",
      //     id : 1,
      //     rolename : "pathologist",
      //     description : 'keyword is used to iterate through each element or object from headers' 
      //   },
      //   {
      //     _id : "def",
      //     id : 2,
      //     rolename : "Admin",
      //     description : 'keyword is used to iterate through each element or object from headers' 
      //   },
      //   {
      //     _id : "ghi",
      //     id : 3,
      //     rolename : "Lab tech",
      //     description : 'keyword is used to iterate through each element or object from headers' 
      //   },
      //   {
      //     _id : "jkl",
      //     id : 4,
      //     rolename : "Role4",
      //     description : 'keyword is used to iterate through each element or object from headers' 
      //   }
      // ]
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
       return this.http.post<any>("http://127.0.0.1:5000/add",user);
    }
    
    addEditedUser(editeduser){
         return this.http.post<any>("http://127.0.0.1:5000/updateUser",editeduser)
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
