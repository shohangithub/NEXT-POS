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
import { InwordPipe } from './core/pipe/inword.pipe';
import { DecimalPointDirective } from './common/directives/decimal-point.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { MatchPasswordDirective } from './common/directives/matchPassword.directive';
import { PasswordPatternDirective } from './common/directives/passwordPattern.directive';
import { ValidateUserNameDirective } from './common/directives/validateUserName.directive';
import { BuyerComponent } from './buyer/buyer/buyer.component';
import { ValidationService } from './common/services/validation.service';
import { NiValidationDirective } from './common/directives/niValidation.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent,PosMenuComponent, DashboardComponent, PostComponent,BuyerComponent, InwordPipe, TemplateDrivenFormComponent,

    DecimalPointDirective,MatchPasswordDirective,PasswordPatternDirective,ValidateUserNameDirective,NiValidationDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
