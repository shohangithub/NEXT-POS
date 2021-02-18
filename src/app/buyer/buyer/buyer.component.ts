import { Component, OnInit } from '@angular/core';
import { Buyer } from './buyer';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html'
})
export class BuyerComponent implements OnInit {
  private buyer = new Buyer();
  private valiationMsg:any;
  constructor() {
    this.valiationMsg = this.buyer.getBuyerBasicNameVMsgs();
   }

  ngOnInit() {
  }

}
