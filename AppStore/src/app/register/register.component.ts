import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterServiceService } from './register-service.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails=new FormGroup({
    firstName:new FormControl('first Name',[Validators.minLength(5),Validators.maxLength(20)]),
    lastName:new FormControl('lastname'),
    mobNum:new FormControl('0123456789'),
    email:new FormControl('abc123@gmail.com'),
    password:new FormControl('')
  });
  constructor(private registerService:RegisterServiceService,private _router:Router) { 
    console.log('Created Register Model..');
  }

  ngOnInit() {
  }

  onApply(){
    console.log('Invoked onApply()....');
    console.log(this.userDetails);
    console.log(this.userDetails.value);

    this.registerService.registraion(this.userDetails).subscribe(data => {
      console.log('Response data is:' + data);
      console.log(data);
      this._router.navigate(['login']);

      
  }, error => {
      console.log('error in http');
  }, () => {
      console.log('no more data');
  });
  }

}
