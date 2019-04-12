import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'src/app/models/product';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl:string= 'http://localhost:3000/ProductCollection';

  constructor(private http: HttpClient) { }


    getProducts():Observable<IProduct[]> {
      const header = new HttpHeaders({'content-type': 'application/json'})
      return this.http.get<IProduct[]>(this._productUrl ,{headers: header},);
     
    }

    getProdectById(id: string): Observable<IProduct> {
      return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.ProductId === id));
    }
  
    addProductToCart(prodcuts: any) {
      localStorage.setItem("product", JSON.stringify(prodcuts));
    }
    getProductFromCart() {
      return JSON.parse(localStorage.getItem('product'));
  }

    removeProductFromCart() {
     return localStorage.removeItem("product");

        
}
  
  
  
}
