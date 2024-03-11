import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisComponent } from './auth/regis/regis.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'regis', component: RegisComponent, title: 'regis' },
  { path: 'logout', component: HomeComponent, title: 'logout' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
