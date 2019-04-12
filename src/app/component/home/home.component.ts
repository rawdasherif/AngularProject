import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products =[];
  public productAddedTocart=[];

  constructor(private _productService: ProductService,private router:Router) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data=> this.products = data);
  }

  onselect(product){
    this.router.navigate(['/product',product.ProductId]);
    
  }

  OnAddCart(product:IProduct )
            {
            console.log(product);         
            this.productAddedTocart=this._productService.getProductFromCart();
            if(this.productAddedTocart==null)
              {
                  this.productAddedTocart=[];
                  this.productAddedTocart.push(product);
                  this._productService.addProductToCart(this.productAddedTocart);   
              }
             else
              {
                   let tempProduct=this.productAddedTocart.find(p=>p.Id==product.ProductId);
                   if(tempProduct==null)
                   {
                     this.productAddedTocart.push(product);
                     this._productService.addProductToCart(this.productAddedTocart);
                    }
                    else
                    {
                      alert("Product already exist in cart.")
                    }
              }
              console.log(this.productAddedTocart)
                    
            }

}
