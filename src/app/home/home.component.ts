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
  title = 'CleanAir';
  constructor() { }

  ngOnInit() {
    this.height = 400;
    console.log(this.height);

    this.imagesUrl = [
      'https://cdn.cnn.com/cnnnext/dam/assets/180828102621-air-pollution-shanghai-2018-0223.jpg',
      'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/airpollution.jpg',
      'https://e360.yale.edu/assets/site/_1500x1500_fit_center-center_80/Getty_WuhanAirPollution_2009_web.jpg',
      'https://www.iqair.com/sites/default/files/styles/wide_hero/public/blog/2018-01/18_01_can_air_pollution.jpg?h=ffdc1c3f&itok=phd-1vtK'
      ];
  }

}
