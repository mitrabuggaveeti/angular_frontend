import { HttpClient } from '@angular/common/http';
import { AlldataService } from './../service/alldata.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../allClasses/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
  
  constructor(private dataService : AlldataService, private http: HttpClient) { }

  userModel = new User( '', '');
 
  ngOnInit(): void {
  }

  onLogin(){
   const apiresp = this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
                            .subscribe((data) => console.log(data))
           
                            
                            
     const temp = this.dataService.getLoginDetails(this.userModel)
     console.log('Login '+ typeof(temp[0]))
  }

}
