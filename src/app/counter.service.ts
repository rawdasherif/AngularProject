import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private currentCartCount = new BehaviorSubject(0);

  constructor() { }

  
  CartCount(count :any) {
    localStorage.setItem("counter", JSON.stringify(count));

   }
   getcartcount(){
    return JSON.parse(localStorage.getItem('counter'));
   }
   removecartcounter(){
    return localStorage.removeItem("counter")
   }

}
