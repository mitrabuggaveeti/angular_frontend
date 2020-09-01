import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  allRoles;
  constructor(private dataService : AlldataService) { }

  ngOnInit(): void {
    this.allRoles = this.dataService.getAllRolesData()
  }

  

}
