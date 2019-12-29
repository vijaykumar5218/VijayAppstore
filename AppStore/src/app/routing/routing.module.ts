import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AddDataComponent } from '../home/add-data/add-data.component';
import { SearchComponent } from '../home/search/search.component';


const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component:HomeComponent,
    children: [{ path: 'addData', component:AddDataComponent }, { path: 'search', component:SearchComponent }]
  },
  { path: '**', redirectTo: 'register' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
