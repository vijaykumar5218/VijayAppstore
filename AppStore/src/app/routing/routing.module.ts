import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AddDataComponent } from '../home/add-data/add-data.component';
import { SearchComponent } from '../home/search/search.component';
import { AppGuard } from '../app.guard';


const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component:HomeComponent,canActivate:[AppGuard],
    children: [{ path: 'addData', component:AddDataComponent }, 
    { path: 'search', component:SearchComponent }]
  },
  { path: '**', redirectTo: 'register' }

];
// saved
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
