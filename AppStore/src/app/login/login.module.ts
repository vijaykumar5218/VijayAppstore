import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,MatInputModule,ReactiveFormsModule,HttpClientModule
    ],
    providers: [],
    exports:[LoginComponent]
  })
  export class LoginModule { }
  