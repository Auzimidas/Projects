import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2prob4',
  templateUrl: './homework2prob4.page.html',
  styleUrls: ['./homework2prob4.page.scss'],
})
export class Homework2prob4Page implements OnInit {
averageScore
letterGrade
  constructor() { }

  ngOnInit() {

let test1= Number(prompt('Score of test 1'));
let test2= Number(prompt('Score of test 2'));
let test3= Number(prompt('Score of test 3'));
this.averageScore= (test1+test2+test3)/3;
if (this.averageScore >=90) {
  this.letterGrade= 'A';
} else if (this.averageScore >=80 && this.averageScore <90) {
  this.letterGrade= 'B';
} else if (this.averageScore >=70 && this.averageScore <80) {
  this.letterGrade= 'C';
} else if (this.averageScore >=60 && this.averageScore <70) {
  this.letterGrade= 'D';
} else if (this.averageScore <60) {
  this.letterGrade= 'F';
}

  }

}
