import { Component, ViewChild, Input } from '@angular/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

// import { chartData } from '../../shared/constants/chart-data';

@Component({
  selector: 'app-chart-factory',
  templateUrl: 'chart-factory.component.html',
  styleUrls: ['chart-factory.component.scss'],
})
export class ChartFactoryComponent {
  @Input() chartItem;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    initialSlide: 1,
    observer: true
  };
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

  public checkIndexChanging(index) {
    console.log('index', index);
  }
}