import { Component, OnInit } from '@angular/core';
import { Buyer } from './buyer';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html'
})
export class BuyerComponent implements OnInit {
  public buyer = new Buyer();
  public valiationMsg:any;
  public x:any={name:'x'};
  constructor() {
    this.valiationMsg = this.buyer.getBuyerBasicNameVMsgs();
   }

  ngOnInit() {
  }

}
