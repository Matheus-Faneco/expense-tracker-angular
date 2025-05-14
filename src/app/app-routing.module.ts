import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AddExpensePageComponent} from './components/add-expense-page/add-expense-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'add-expense', component: AddExpensePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
