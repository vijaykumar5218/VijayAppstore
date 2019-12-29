import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUserDetails;

  loginDetails = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });
  constructor(private loginService: LoginService,private _router:Router) {
    console.log('Created LoginComponenet....')
  }

  ngOnInit() {
    console.log('Invoked onInit()....');
    this.loginService.getAllUserDetails().subscribe(data => {
      console.log('Response data is:' + data);
      console.log(data);
      this.allUserDetails = data["storedDataList"];
      console.log(this.allUserDetails);
    }, error => {
      console.log('error in http');

    }, () => {
      console.log('no more data');
    });
  }


  onLoginClick() {
    console.log('invoked  onLoginClick....');
    if (this.allUserDetails!= null) {
      for (let i = 0; i < this.allUserDetails.length; i++) {
        if(this.allUserDetails[i].email!=null && this.allUserDetails[i].password!=null){
          if((this.loginDetails.get('emailId').value==this.allUserDetails[i].email)&&(this.loginDetails.get('password').value==this.allUserDetails[i].password)){
            sessionStorage.setItem('name',this.allUserDetails[i].firstName);
            console.log('data campaared and user is found: '+this.allUserDetails[i].firstName);
            this._router.navigate(["/home"]);

          }
        }

      }
    }



  }

  onCancelClick() {
    console.log('login cancle button click...');
  }

}
