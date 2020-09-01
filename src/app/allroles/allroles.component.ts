import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../service/alldata.service';

@Component({
  selector: 'app-allroles',
  templateUrl: './allroles.component.html',
  styleUrls: ['./allroles.component.css']
})
export class AllrolesComponent implements OnInit {

  allRoles;
  constructor(private dataService : AlldataService) { }

  ngOnInit(): void {
    this.allRoles = this.dataService.getAllRolesData()
  }


}
