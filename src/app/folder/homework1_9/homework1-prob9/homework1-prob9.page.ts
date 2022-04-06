import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1-prob9',
  templateUrl: './homework1-prob9.page.html',
  styleUrls: ['./homework1-prob9.page.scss'],
})
export class Homework1Prob9Page implements OnInit {

  constructor() { }

  ngOnInit() {

    let miles= Number(prompt('Miles driven'));
    let gallonsUsed= Number(prompt('Gallons used'));
    let MPG= 0;
    MPG= miles/gallonsUsed;
    console.log(`${MPG} miles per gallon`);

  }

}
