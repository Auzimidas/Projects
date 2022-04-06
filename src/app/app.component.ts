import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Madlib', url: '/folder/madlib/madlib', icon: 'newspaper' },
    { title: 'Average test score (hw1)', url: '/folder/homework1_10/homework1-prob10', icon: 'newspaper' },
    { title: 'City name (hw1)', url: '/folder/homework1_12/homework1prob12', icon: 'newspaper' },
    { title: 'Stocks (hw1)', url: '/folder/homework1_17/homework1prob17', icon: 'newspaper' },
    { title: 'Magic 8 ball (hw2)', url: '/folder/homework2_1/homework2-prob1', icon: 'newspaper'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
