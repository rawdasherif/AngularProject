import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CounterService} from 'src/app/counter.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemCountarr=[];
  public cartItemCount:number ;
  public cartlist=[];

  constructor(private _router:Router,private counter:CounterService,private _productService: ProductService) { }

  ngOnInit() {
this.cartlist=this._productService.getProductFromCart()
console.log(this.cartlist)
     this.cartItemCountarr= this.counter. getcartcount()
     if( this.cartItemCountarr == null){
      this.cartItemCountarr=[];
      this.cartItemCount=0;
     }
     else{
      this.cartItemCount=this.cartItemCountarr.length;
     }
    }
  

 goto(){
  this._router.navigate(['cart']);
 }
 
 goToWish(){
  this._router.navigate(['wish']);
 }

 gotoHome(){
  this._router.navigate(['home']);
 }

 logout(){
  this._router.navigate(['login']);
 }

}
