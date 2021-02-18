import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer/buyer.component';
import { PreloadModulesStrategy } from './core/strategies/preload-modules-strategy';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'index', redirectTo: '/login',pathMatch: 'full'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'post', component:PostComponent},
  { path: 'validation', component:TemplateDrivenFormComponent},
  { path: 'buyer', component:BuyerComponent},
  { path: 'item', data: { preload: true }, loadChildren: () => import('./item/item.module').then(m => m.ItemModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadModulesStrategy, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
