import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../common/services/validation.service';
import { User } from './user'

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
   userModal:User = {name:null,email:null,username:null,password:null,confirmPassword:null};

  constructor(private svc:ValidationService) { 
  }

  ngOnInit(): void {
  }


 

  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
  }
}
