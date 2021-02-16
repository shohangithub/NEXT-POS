import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { PosMenuComponent } from './shared/pos-menu/pos-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    
  ],
  declarations: [AppComponent,PosMenuComponent, DashboardComponent, PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
