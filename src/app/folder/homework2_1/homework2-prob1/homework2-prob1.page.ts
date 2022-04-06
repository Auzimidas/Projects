import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2-prob1',
  templateUrl: './homework2-prob1.page.html',
  styleUrls: ['./homework2-prob1.page.scss'],
})
export class Homework2Prob1Page implements OnInit {
  result
  constructor() { }

  ngOnInit() {

let number = Math.floor(Math.random() * 8) + 1;
switch (number) {
  case 1:
    this.result = 'Opportunity awaits you';
    break;
  case 2:
    this.result = 'You are on the verge of success';
    break;
  case 3:
    this.result = 'A diffiuclt problem will arise for you';
    break;
  case 4:
    this.result = 'Now is the time to decide your destiny';
    break;
  case 5:
    this.result = 'You will meet someone who will change your life';
    break;
  case 6:
    this.result = 'You will fail to obtain what you want most, but find something better along the way';
    break;
  case 7:
    this.result = 'A loved one will soon pass';
    break;
  case 8:
    this.result = 'A trial lies around the corner';
    break;
}

  }

}
