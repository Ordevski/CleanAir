import 'popper.js';
import 'bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wake-up-call',
  templateUrl: './wake-up-call.component.html',
  styleUrls: ['./wake-up-call.component.scss']
})
export class WakeUpCallComponent implements OnInit {
  title  = 'Wake up call';
  height: number;
  constructor() { }

  ngOnInit() {
    this.height = 400;
    console.log(this.height);
  }

}
