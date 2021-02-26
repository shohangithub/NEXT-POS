import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortInfoComponent } from './sort-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SortInfoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SortInfoComponent
  ]
})
export class SortInfoModule { }
