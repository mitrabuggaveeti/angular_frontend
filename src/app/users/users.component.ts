import { editUser } from './../allClasses/editUser';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AlldataService } from '../service/alldata.service';
import {newUser} from '../allClasses/newUser'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers ;
  bool;
  newUserModel = new newUser("","","")
  editUserModel = new editUser("","")
  isUserAdded : string = ""

  constructor(private dataService : AlldataService) {
  
   }

  ngOnInit(): void {
   
    //if(token!=="mitra")
   // window.location.href = "/login";
    this.dataService.getAllUsersData().subscribe((data) =>{
        this.allUsers = JSON.parse(data)
    })
  } 

  addUser(){  
    this.isUserAdded = "Successfully added"
    console.log(this.newUserModel);
    this.allUsers.push({
        name : "xyz",
        email : "xyz@a.com",
        password : '123',
        role : "pathalogist",
    })
    this.newUserModel = new newUser("","","")
  }
  
  editUser(evt){
    console.log(evt)
    this.bool = 5
    this.editUserModel = new editUser(evt.name,evt.role);
    console.log(this.editUserModel)

  }
  onClose(){
    this.isUserAdded = ""
  }

}
