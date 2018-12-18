import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wake-up-call',
  templateUrl: './wake-up-call.component.html',
  styleUrls: ['./wake-up-call.component.sass']
})
export class WakeUpCallComponent implements OnInit {
  title  = 'Wake up call';
  constructor() { }

  ngOnInit() {
  }

}
