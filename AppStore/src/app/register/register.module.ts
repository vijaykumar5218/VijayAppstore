import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterServiceService } from './register-service.service';
import { LoginService } from '../login/login.service';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,MatInputModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [RegisterServiceService,LoginService],
  exports:[RegisterComponent]
})
export class RegisterModule { }
