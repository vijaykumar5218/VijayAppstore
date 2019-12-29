import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
  
    allUserDetails;
    userDetails;
    constructor(private http:HttpClient) { 
      console.log('Invoked Reg Service method...')
    }
    logInDetails={};

    getAllUserDetails(){
     return  this.http.get("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/VijayAppstore");
      
    
       
    }
    
  }
  