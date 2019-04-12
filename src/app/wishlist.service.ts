import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  addProductToWish(wishone: any) {
    localStorage.setItem("wishlist", JSON.stringify(wishone));
  }
  getProductFromWish() {
    return JSON.parse(localStorage.getItem('wishlist'));
}

  removeProductFromWish() {
   return localStorage.removeItem("wishlist");
  }
}
