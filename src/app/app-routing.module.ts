import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' }, // Redirect to catalogue by default
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'about', component: AboutComponent},
  { path: 'cart', component: CartComponent },
  { path: 'confirm-order', component: ConfirmOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
