import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from '../login/login.component';
import { AddDataComponent } from './add-data/add-data.component';
import { SearchComponent } from './search/search.component';
import { RoutingModule } from '../routing/routing.module';


@NgModule({
  declarations: [HomeComponent,AddDataComponent,SearchComponent],
  imports: [
    CommonModule,MatInputModule,ReactiveFormsModule,HttpClientModule,RoutingModule
  ],
  providers: [],
    exports:[HomeComponent,AddDataComponent,SearchComponent]
})
export class HomeModule { }
