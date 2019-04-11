import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute,Router } from '@angular/router';




@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  product: IProduct;

  constructor(private _productService: ProductService,private _router: Router,
    private _activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    if (!this.product) {
      let id = this._activatedrouter.snapshot.paramMap.get('id');
      this.getProduct(id);
     }
  }
  
  getProduct(id: string) {
    this._productService.getProdectById(id)
        .subscribe(data => this.product = data);
}

onBack(): void {
  this._router.navigate(['home']);
}


}
