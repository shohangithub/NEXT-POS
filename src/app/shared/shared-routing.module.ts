import { NgModule } from '@angular/core';
import { PosMenuComponent } from './pos-menu/pos-menu.component';


@NgModule({
  declarations:[PosMenuComponent],
  exports: [PosMenuComponent]
})
export class SharedRoutingModule { }
