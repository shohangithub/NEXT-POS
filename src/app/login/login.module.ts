import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SortInfoModule } from '../shared/components/sort-info/sort-info.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',component:LoginComponent}
];

@NgModule({  
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SortInfoModule,   
    RouterModule.forRoot(routes)
  ],
  declarations: [LoginComponent],  
  exports: [LoginComponent],
})
export class LoginModule { 
 
}
