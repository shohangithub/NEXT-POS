import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkUser(user:User):boolean{
     if(user.userName == 'admin' && user.password == '123')return true;
     else return false;
  }
}
