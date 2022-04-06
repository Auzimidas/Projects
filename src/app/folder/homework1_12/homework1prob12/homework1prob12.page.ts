import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1prob12',
  templateUrl: './homework1prob12.page.html',
  styleUrls: ['./homework1prob12.page.scss'],
})
export class Homework1prob12Page implements OnInit {
  cityCharacters
  cityCaps
  cityLower
  cityFirstCha
  constructor() { }

  ngOnInit() {

let favoriteCity= prompt('Your favorite city');
this.cityCharacters= favoriteCity.length;
this.cityCaps= favoriteCity.toUpperCase();
this.cityLower= favoriteCity.toLowerCase();
this.cityFirstCha= favoriteCity.charAt(0);

  }

}
