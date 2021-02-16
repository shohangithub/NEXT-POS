import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/login/user';

@Component({
  selector: 'app-pos-menu',
  templateUrl: './pos-menu.component.html',
  styleUrls: ['./pos-menu.component.css']
})
export class PosMenuComponent implements OnInit {
  
  constructor(private router:Router,private auth:AuthService) { 
  }

  ngOnInit(): void {
    
  }

  Logout = ()=>{
    this.auth.setCurrentUser(new User('',''));
    console.log(this.auth.currentUser);
    this.router.navigate(['login']); 
  }  

}
