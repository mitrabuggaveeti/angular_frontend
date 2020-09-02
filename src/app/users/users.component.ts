import { editUser } from './../allClasses/editUser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AlldataService } from '../service/alldata.service';
import {newUser} from '../allClasses/newUser'
import { DataService } from '../data.service';

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
  newUserModel = new newUser("","","",[])
  editUserModel = new editUser("","")
  isUserAdded : string = ""
  alloptions = {
    role : "xyz"
  }

  constructor(private dataService : AlldataService,private sessionStatus:DataService) {
  
   }

  ngOnInit(): void {
   
    //if(token!=="mitra")
   // window.location.href = "/login";
    // this.dataService.getAllUsersData().subscribe((data) =>{
    //     this.allUsers = JSON.parse(data)
    // })
  //  this.allUsers = this.dataService.getAllUsersData()
  //this.allRoles = this.dataService.getAllRoles()

     this.dataService.getAllUsersData()
                     .subscribe((data) =>{
                        this.allUsers = JSON.parse(data)
                     })
     this.dataService.getAllRoles()
                      .subscribe((data) =>{
                         this.allRoles = JSON.parse(data)
                      })
                
  } 

  
  signout(){
    this.sessionStatus.logout()
    window.location.href = "/login"
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
    this.allUsers.push(this.newUserModel)
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
    this.bool = 5
    this.editUserModel = new editUser(evt.email,evt.role);
    console.log(this.editUserModel)

  }
  onClose(){
    this.isUserAdded = ""
  }

}
