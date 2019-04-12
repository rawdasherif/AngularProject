import { Component, OnInit } from '@angular/core';
import {WishlistService} from 'src/app/wishlist.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public productAddedToWish=[];

  constructor(private _wishlist:WishlistService,private router:Router) { }

  ngOnInit() {
    this.productAddedToWish=this._wishlist.getProductFromWish();
    this._wishlist.removeProductFromWish();
    this._wishlist.addProductToWish(this.productAddedToWish);
  }
  RemoveFromWish(product){
    this.productAddedToWish=this._wishlist.getProductFromWish();
    this.productAddedToWish.find(p=>p.ProductId==product.ProductId);
    var index=this.productAddedToWish.indexOf(this.productAddedToWish.find(p=>p.ProductId==product.ProductId));
    this.productAddedToWish.splice(index,1);
    this._wishlist.removeProductFromWish();
    this._wishlist.addProductToWish(this.productAddedToWish);
    this.router.navigate(['/wish']);
  }

}
