import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product/:id', component:SingleProductComponent},
  {path:'cart', component:CartPageComponent},
  {path:'wish', component:WishlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
