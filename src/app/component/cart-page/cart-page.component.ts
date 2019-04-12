import { Component, OnInit } from '@angular/core';;
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public productAddedTocart=[];

  constructor(private _productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.productAddedTocart=this._productService.getProductFromCart();
    this._productService.removeProductFromCart();
    this._productService.addProductToCart(this.productAddedTocart);
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

}
