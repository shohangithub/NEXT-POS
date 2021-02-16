import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User;
  constructor() {
      this.currentUser= new User('','');
   }
   public setCurrentUser(user:User): boolean{
     try {
       this.currentUser = user;
       return true;
     } catch (error) {
       throwError(error);
     }
      return false;
   }
   public getCurrentUser(): User{
     return  this.currentUser;
   }
   public checkPermission(): boolean{
    return  this.currentUser.userName !='';
  }

}
