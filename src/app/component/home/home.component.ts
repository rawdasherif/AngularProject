import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import {CounterService} from 'src/app/counter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products =[];
  public productAddedTocart=[];
  public cartItemCountarr=[];
  public cartItemCount:number ;

  constructor(private _productService: ProductService,private router:Router,private counter:CounterService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data=> this.products = data);
    this.cartItemCountarr= this.counter. getcartcount()
    if( this.cartItemCountarr == null){
     this.cartItemCountarr=[];;
     this.cartItemCount=0;
    }
    else{
     this.cartItemCount=this.cartItemCountarr.length;
    }
  }

  onselect(product){
    this.router.navigate(['/product',product.ProductId]);
    
  }

  AddCart(product:IProduct )
            {   
            this.productAddedTocart=this._productService.getProductFromCart();
            if(this.productAddedTocart==null)
              {
                  this.productAddedTocart=[];
                  this.productAddedTocart.push(product);
                  this._productService.addProductToCart(this.productAddedTocart); 
                  this.cartItemCount=1; 
                  this.cartItemCountarr.push(1);
                  this.counter.CartCount(this.cartItemCountarr);
              }
             else
              {
                   let tempProduct=this.productAddedTocart.find(p=>p.ProductId==product.ProductId);
                   if(tempProduct==null)
                    {
                     this.productAddedTocart.push(product);
                     this._productService.addProductToCart(this.productAddedTocart);
                     this.cartItemCountarr.push(1);
                     this.counter.CartCount(this.cartItemCountarr);
                    }
                    else
                    {
                      if(confirm("Product already exist in cart.are you need to add anther one? ")){
                       console.log(this.cartItemCount)
                       var quantity= this.productAddedTocart.find(p=>p.ProductId==product.ProductId).Quantity ;
                       quantity=quantity+1;
                       this.productAddedTocart.find(p=>p.ProductId==product.ProductId).Quantity=quantity;
                       this._productService.removeProductFromCart();
                       this._productService.addProductToCart(this.productAddedTocart);
                      this.cartItemCountarr.push(1);
                      this.counter.CartCount(this.cartItemCountarr);
                      }
                    }
            }
            
}
}
