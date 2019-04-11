import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products =[];

  constructor(private _productService: ProductService,private router:Router) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data=> this.products = data);
  }

  onselect(product){
    this.router.navigate(['/product',product.ProductId]);
    
  }

}
