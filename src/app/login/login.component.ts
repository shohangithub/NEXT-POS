import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { LoginService } from './login.service';


@Component({
  selector: 'ni-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  childData:any =[
    {isCheck:false,field:"Hello",orderNo:0},
    {isCheck:false,field:"How",orderNo:0},
    {isCheck:false,field:"are",orderNo:0},
    {isCheck:false,field:"you",orderNo:0},
  ];
  
  outputFrmChild:string="";

  getString(output: string) {
    console.log(`Form Parent ${output}`);
    this.outputFrmChild = output;
  }


  userForm = this.fb.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  
  errorMessage:string ='';

  constructor(private router:Router, public  fb:FormBuilder,private svc:LoginService,private auth: AuthService) { }


  ngOnInit(): void {
      
  }

  login(){
    if(this.userForm.valid){
      let result = this.svc.checkUser(this.userForm.value);
      if(result){
        this.auth.setCurrentUser(this.userForm.value);
        this.router.navigate(['dashboard']);
        this.errorMessage ='';
        console.log(this.auth.currentUser);
        console.log('Login Succesfully !!');
      }else{
        this.errorMessage ='Invalid User or Password !';
      }
    }
  }

}
