import { Component, OnInit } from '@angular/core';;
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import {CounterService} from 'src/app/counter.service';
import { last } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public productAddedTocart=[];
  public totalprice=0; 
  public cartItemCountarr=[];


  constructor(private _productService:ProductService,private router:Router,private counter:CounterService) { }

  ngOnInit() {
    this.productAddedTocart=this._productService.getProductFromCart();
    this._productService.removeProductFromCart();
    this._productService.addProductToCart(this.productAddedTocart);
    for(let i of this.productAddedTocart){
      this.totalprice=i.Quantity*i.Price+this.totalprice;      
    }
  }

  RemoveProduct(product:IProduct)
  {
    this.productAddedTocart=this._productService.getProductFromCart();
    this.productAddedTocart.find(p=>p.ProductId==product.ProductId);
    var index=this.productAddedTocart.indexOf(this.productAddedTocart.find(p=>p.ProductId==product.ProductId));
    this.productAddedTocart.splice(index,1);
    this._productService.removeProductFromCart();
    this._productService.addProductToCart(this.productAddedTocart);
    this.router.navigate(['/cart']);

  }

  RemoveOneProduct(product:IProduct){
    this.productAddedTocart=this._productService.getProductFromCart();
    var quantity=this.productAddedTocart.find(p=>p.ProductId==product.ProductId).Quantity;
    quantity=quantity-1;
    this.productAddedTocart.find(p=>p.ProductId==product.ProductId).Quantity=quantity;
    this._productService.removeProductFromCart();
    this._productService.addProductToCart(this.productAddedTocart);

    this.cartItemCountarr= this.counter. getcartcount();
    this.cartItemCountarr.splice(1,1);
    this.counter.removecartcounter();
    this.counter.CartCount(this.cartItemCountarr);
    window.location.reload();
  }

}
