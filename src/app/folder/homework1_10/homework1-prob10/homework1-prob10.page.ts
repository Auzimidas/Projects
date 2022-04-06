import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1-prob10',
  templateUrl: './homework1-prob10.page.html',
  styleUrls: ['./homework1-prob10.page.scss'],
})
export class Homework1Prob10Page implements OnInit {
  avgTest
  constructor() { }

  ngOnInit() {

let test1= Number(prompt('Score of test 1'));
let test2= Number(prompt('Score of test 2'));
let test3= Number(prompt('Score of test 3'));
this.avgTest = (test1+test2+test3)/3;


  }

}
