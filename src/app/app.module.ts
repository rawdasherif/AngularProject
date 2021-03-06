import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/navbar/header/header.component';
import { FooterComponent } from './component/navbar/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import {CounterService} from './counter.service';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import {WishlistService} from './wishlist.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SingleProductComponent,
    CartPageComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProductService,CounterService,WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
