import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {

  message;

  constructor() { }

  ngOnInit() {

    let container1= prompt('Enter a container');
    let adjective1= prompt('Enter an adjective');
    let adjective2= prompt('Enter an adjective');
    let noun1= prompt('Enter a noun');
    let animal1= prompt('Enter an animal');
    let vegetable1= prompt('Enter a vegetable');
    let vegetable2= prompt('Enter a vegetable');
    let color1= prompt('Enter a color');
    let adjective3= prompt('Enter an adjective');
    this.message= `Make sure your lunch ${container1} is filled with nutritious ${adjective1} food. Do not go to the ${adjective2} food stand aross the street from the school. The hamburgers they serve are fried in ${noun1} and are made of ${animal1} meat. So take a sandwich made of ${vegetable1} or ${vegetable2}, it's much healthier! Drink ${color1} milk instead of ${adjective3} colas.`

  }

}
