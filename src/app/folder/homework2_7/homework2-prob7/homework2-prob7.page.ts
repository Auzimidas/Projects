import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2-prob7',
  templateUrl: './homework2-prob7.page.html',
  styleUrls: ['./homework2-prob7.page.scss'],
})
export class Homework2Prob7Page implements OnInit {

firstName
secondName
thirdName
nameOrder

  constructor() { }

  ngOnInit() {

let name1= prompt('Name 1');
let name2= prompt('Name 2');
let name3= prompt('Name 3');
if ((name1 < name2) && (name1 < name3)) {
  this.firstName= name1;
} else if ((name2 < name1) && (name2 < name3)) {
  this.firstName= name2;
} else {
  this.firstName= name3;
}
if (((name1 > name2) && (name1 < name3)) || ((name1 < name2) && (name1 > name3))){
  this.secondName= name1;
} else if (((name2 > name1) && (name2 < name3)) || ((name2 < name1) && (name2 > name3))){
  this.secondName= name2;
} else {
  this.secondName= name3;
}
if ((name1 > name2) && (name1 > name3)) {
  this.thirdName= name1;
} else if ((name2 > name1) && (name2 > name3)) {
  this.thirdName= name2;
} else {
  this.thirdName= name3;
}
this.nameOrder= `${this.firstName}, ${this.secondName}, ${this.thirdName}`;
  }

}
