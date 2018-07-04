import { Component, OnInit, ViewChild } from '@angular/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { chartData } from '../shared/constants/chart-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  public chartData = chartData;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: 1,
    observer: true
  };
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
}