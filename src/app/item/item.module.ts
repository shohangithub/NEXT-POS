import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  declarations: [ItemRoutingModule.components]
})
export class ItemModule { }
