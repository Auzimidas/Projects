import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1prob17',
  templateUrl: './homework1prob17.page.html',
  styleUrls: ['./homework1prob17.page.scss'],
})
export class Homework1prob17Page implements OnInit {
  STOCKCOUNT= 1000;
  INITALSTOCKVALUE= 32.87;
  LATERSTOCKVALUE= 33.92;
  COMMISSIONPERCENTAGE= 2;
  INITALSTOCKTOTAL= this.STOCKCOUNT * this.INITALSTOCKVALUE;
  INITALCOMMISSION= this.INITALSTOCKTOTAL/(100/this.COMMISSIONPERCENTAGE);
  LATERSTOCKTOTAL= this.STOCKCOUNT * this.LATERSTOCKVALUE;
  LATERCOMMISSION= this.LATERSTOCKTOTAL/(100/this.COMMISSIONPERCENTAGE);
  PROFIT= (this.LATERSTOCKTOTAL-this.LATERCOMMISSION)-(this.INITALSTOCKTOTAL-this.INITALCOMMISSION);
  constructor() { }

  ngOnInit() {

  }

}