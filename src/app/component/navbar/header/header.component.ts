import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CounterService} from 'src/app/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartItemCountarr=[];
  public cartItemCount:number ;

  constructor(private _router:Router,private counter:CounterService) { }

  ngOnInit() {

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

}
