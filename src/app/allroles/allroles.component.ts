import { newRole } from './../allClasses/newRole';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.css']
})
export class AllrolesComponent implements OnInit {

  allRoles;
  newRoleModel = new newRole("","")
  constructor(private dataService : AlldataService,private sessionStatus : DataService) { }

  ngOnInit(): void {
    this.allRoles = this.dataService.getAllRolesData()
  }

  addNewRole(){

    console.log(this.dataService.addRole(this.newRoleModel))
    this.newRoleModel = new newRole("","")

  }
  
  signout(){
    this.sessionStatus.logout()
    window.location.href = "/login"
  }

}
