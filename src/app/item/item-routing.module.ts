import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetitemComponent } from './setitem/setitem.component';

const routes: Routes = [
  {path:'',component: SetitemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { 
  static components = [SetitemComponent]
}
