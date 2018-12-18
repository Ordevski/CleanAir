import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl;
  height: number;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = window.innerHeight;
  }

  ngOnInit() {
    this.height = window.innerHeight;
    console.log(this.height);

    this.imagesUrl = [
      'https://cdn.cnn.com/cnnnext/dam/assets/180828102621-air-pollution-shanghai-2018-0223.jpg',
      'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/airpollution.jpg',
      ];
  }

}
