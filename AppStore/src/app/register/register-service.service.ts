import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { 
    console.log('Invoked Reg Service method...')
  }
  details={};
  registraion(reg:FormGroup){
   
    
    console.log('invoked reg... from service');
    console.log(reg);
    console.log(reg.value);

    var json={"VijayAppstore":reg.value}
   return this.http.post("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/save", json);

    // this.http.get("http://x-workz.mj.milesweb.cloud/x-workz-api/v2/fetchData/VijayAppstore").subscribe(data=>{
    //   console.log('Response data is:' + data);
    //   console.log(data);
    //   this.details=data;
    //         console.log(this.details);
    // },error=>{
    //   console.log('error in http');

    // },()=>{
    //   console.log('no more data');
    // }
    // )    
  }
}
