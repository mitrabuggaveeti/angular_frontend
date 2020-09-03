import { DataService } from './../data.service';
import { HttpClient } from '@angular/common/http';
import { AlldataService } from './../service/alldata.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../allClasses/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    
  
  constructor(private dataService : AlldataService,private authserv:DataService, private http: HttpClient, private _router : Router) { }

  userModel = new User( '', '');
  json ;
  ngOnInit(): void {
  }

  onLogin(){
    
    //  this.dataService.getLoginDetails(this.userModel)
    //                       .subscribe((data) => 
    //                                   {
    //                                     console.log(data) ;
    //                                     this.json = JSON.stringify(data.json)
                                        

    //                                     var obj = JSON.parse(this.json)
    //                                      console.log(obj.email)
    //                                     if(obj.email == "mitra" && obj.password == "123"){
    //                                       localStorage.setItem('jwt',obj.email );
    //                                       window.location.href = "/users";
    //                                     }
                                        
    //                                      //this._router.navigateByUrl("/users")
    //                                     else window.location.href = "/login";
    //                                   //  this._router.navigateByUrl("/users")
    //                                   })


    this.authserv.loginUser(this.userModel)
                 .subscribe((data) =>{

                   if(data.status === "yes"){
                      localStorage.setItem('sessionToken',data.token);
                      window.location.href = "/users";
                    }
                    else window.location.href = "/login";
                 },
                 (eror) =>{
                  window.location.href = "/login";
                })



    // console.log(this.userModel)
    //  var obj =this.authserv.loginUser(this.userModel)
    //  console.log(obj)
    //  if(obj.status == "yes") {
    //     localStorage.setItem('status',obj.status );
    //     window.location.href = "/users";
    //  }
    //  else{
    //   window.location.href = "/login"
    //  }             
  }

 

}
