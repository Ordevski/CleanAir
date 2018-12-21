import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {


  isCollapsed : boolean = true;

  isCollapsed1 : boolean = true;
  isCollapsed2 : boolean = true;
  isCollapsed3 : boolean = true;
  isCollapsed4 : boolean = true;
  isCollapsed5 : boolean = true;


  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleCollapse1(){
    this.isCollapsed1 = !this.isCollapsed1;
  }

  toggleCollapse2(){
    this.isCollapsed2 = !this.isCollapsed2;
  }

  toggleCollapse3(){
    this.isCollapsed3 = !this.isCollapsed3;
  }

  toggleCollapse4(){
    this.isCollapsed4 = !this.isCollapsed4;
  }

  toggleCollapse5(){
    this.isCollapsed5 = !this.isCollapsed5;
  }

  ngOnInit() {
  }

}
