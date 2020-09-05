import { deleteUser } from './../allClasses/deleteUser';
import { editUser } from './../allClasses/editUser';
import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import {newUser} from '../allClasses/newUser'
import { DataService } from '../data.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers ;
  allRoles ;
  selectedRole;
  bool;
  rolesarray : string[] = [];
  newUserModel = new newUser("","","",[])
  editUserModel = new editUser("","",[])
  deleteUserModel = new deleteUser("")
  fruitList;
  isUserAdded : string = ""
  userEdited : string = ""
  userDeleted : string = ""
  cities2;
  temp ;
   selectedCityIds: string[];
  constructor(private dataService : AlldataService,private sessionStatus:DataService,private http:HttpClient) {
    console.log(JSON.stringify(this.editUserModel) +" fsdfgbg")
   }

  ngOnInit(): void {
   
  
      this.dataService.getAllUsersData()
           .subscribe((data) =>{
          
             this.allUsers = data

             for(let x=0;x<this.allUsers.length;x++)
              {

                        var obj = {
                          roles : this.allUsers[x].role
                    };//console.log(this.allUsers[x])
                        this.http.post<any>("http://127.0.0.1:5000/infoR",obj)
                                .subscribe((data)=>{
                                  //console.log(data)
                                    this.allUsers[x].role = data
                                  // x.role=data
                                  //  console.log(x.role)
                                })
                    // console.log(this.allUsers)
                    // this.allUsers[x].role=[]

                }
             
           })

           this.dataService.getAllRoles()
                    .subscribe((data)=>{
                      this.allRoles = data
                    })

     
    // console.log(this.allUsers)
    //  this.temp =  [ 
    //                 { 
    //                   _id : "def",
    //                   id : 2,
    //                 rolename : "Admin",
    //                 description : 'keyword is used to iterate through each element or object from headers'
    //                 },
    //                 { 
    //                   _id : "ghi",
    //                   id : 3,
    //                   rolename : "Labtech",
    //                   description : 'keyword is used to iterate through each element or object from headers'
    //                   },

    //              ]
    
      
          // for(var x of this.allUsers){
               
          //   // this.http.post<any>("",x.roles)
          //   //          .subscribe((data)=>{
          //   //              x.roles = this.temp
          //   //          })
          //   // console.log(x.roles)
          //   x.roles = this.temp
          //    //console.log(x)
          // }


       //   console.log(this.allUsers)


      
    // this.allRoles = this.dataService.getAllRoles()


    //  this.dataService.getAllUsersData()
    //                  .subscribe((data) =>{
                        
    //                     var alldata = JSON.parse(data)
    //                     if(alldata.staus === "No") { 
    //                       window.location.href = "/login";
    //                     }
    //                     this.allUsers = JSON.parse(data)
                            
    //                  })
    //  this.dataService.getAllRoles()
    //                   .subscribe((data) =>{
    //                      this.allRoles = JSON.parse(data)
    //                   })
                
  } 

  
 
  onchange(){
    console.log('chnge')
  }

  addUser(){  
    
    console.log(this.newUserModel);
      // this.allUsers.push({
    //     name : "xyz",
    //     email : "xyz@a.com",
    //     password : '123',
    //     role : "pathalogist",
    // })
  //  this.allUsers.push(this.newUserModel)
    this.dataService.addNewUser(this.newUserModel)
                      .subscribe((data) =>{
                        this.isUserAdded = "Successfully added"
                        this.allUsers.push(this.newUserModel)
                      },
                      (error)=>{
                        this.isUserAdded = "Server Error"
                      })

    this.newUserModel = new newUser("","","",[])
  }
  
  editUser(evt){
     console.log(evt.role)
       this.rolesarray = [] 
     for(var i=0;i<evt.role.length;i++){
       this.rolesarray.push(evt.role[i]._id.$oid)
      }
      console.log("roles array "+this.rolesarray)
     //this.editUserModel = new editUser(evt.email,evt.name,this.rolesarray);
     this.editUserModel = new editUser(evt.email,evt.name,this.rolesarray);
    console.log(this.editUserModel)
     
  }

  removeUser(evt){
      this.deleteUserModel = new deleteUser(evt.email)
      console.log(this.deleteUserModel)
  }
  submitEditedUser(){
     
    console.log(this.editUserModel)
    var xyz = []

    for(let a=0;a<this.editUserModel.roles.length;a++){
            xyz.push({
               
                 $oid : this.editUserModel.roles[a]
               
            })
    }

    //console.log(xyz)

   var newobj = {
     email : this.editUserModel.email,
     name : this.editUserModel.name,
     roles : xyz

   }
    
   console.log(newobj)

    //this.dataService.
    this.dataService.addEditedUser(newobj)
                     .subscribe(
                      (data) => {
                          this.userEdited = "Successfully Edited"
                      },
                      (error) =>{
                        console.log(error);
                        
                          this.userEdited = "Error while Editing" 
                      }
                      )
  }

  deletetheUser(){
     
     this.dataService.deleteUser(this.deleteUserModel)
                      .subscribe(
                         (data) => {
                             this.userDeleted = "Successfully deleted"
                         },
                         (error) =>{
                             this.userDeleted = "Error while deletion" 
                         }
                         )
  }

 
  onClose(){
    this.editUserModel = new editUser("","",[])
    this.isUserAdded = ""
    this.userDeleted = ""
    this.userEdited = " "
  }

  signout(){

    // this.sessionStatus.logout()
    //      .subscribe((data) =>{
    //         window.location.href = "/login"
    //      },
    //       (error) =>{

    //       }
    //      )
    this.sessionStatus.logout()
   
  }

}
