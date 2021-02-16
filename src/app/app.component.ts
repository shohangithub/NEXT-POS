import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { User } from './login/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'NEXT-POS';
  user:User;
  constructor(private router: Router,private auth: AuthService) {
    this.user = auth.getCurrentUser();
  }
  // ngOnInit() {
  //   this.user = this.auth.getCurrentUser();
  // }
}