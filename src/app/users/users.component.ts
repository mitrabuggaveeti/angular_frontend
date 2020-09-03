import { deleteUser } from './../allClasses/deleteUser';
import { editUser } from './../allClasses/editUser';
import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';
import {newUser} from '../allClasses/newUser'
import { DataService } from '../data.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

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
  rolesarray : [];
  newUserModel = new newUser("","","",[])
  editUserModel = new editUser("","",[])
  deleteUserModel = new deleteUser("")
  fruitList;
  isUserAdded : string = ""
  userEdited : string = ""
  userDeleted : string = ""
  cities2;
   selectedCityIds: string[];
  constructor(private dataService : AlldataService,private sessionStatus:DataService) {
    console.log(JSON.stringify(this.editUserModel) +" fsdfgbg")
   }

  ngOnInit(): void {
   
    //if(token!=="mitra")
   // window.location.href = "/login";
    // this.dataService.getAllUsersData().subscribe((data) =>{
    //     this.allUsers = JSON.parse(data)
    // })
     this.allUsers = this.dataService.getAllUsersData()
     this.allRoles = this.dataService.getAllRoles()


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
     console.log(evt)

     this.rolesarray = evt.roles.map(x => x.rolename)
     console.log("abc "+this.rolesarray)
    this.editUserModel = new editUser(evt.email,evt.name,evt.roles);
    console.log(this.editUserModel)
     
  }

  removeUser(evt){
      this.deleteUserModel = new deleteUser(evt.email)
      console.log(this.deleteUserModel)
  }
  submitEditedUser(){
     
    console.log(this.editUserModel)

    //this.dataService.
    this.dataService.addEditedUser(this.editUserModel)
                     .subscribe(
                      (data) => {
                          this.userEdited = "Successfully Edited"
                      },
                      (error) =>{
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
    this.isUserAdded = ""
    this.userDeleted = ""
    this.userEdited = " "
  }

  signout(){
    this.sessionStatus.logout()
    window.location.href = "/login"
  }

}
