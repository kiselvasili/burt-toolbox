import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Material
 */
import { MatCardModule } from '@angular/material';;

/**
 * swiper
 */
import { SwiperModule } from 'ngx-swiper-wrapper';

/**
 * highcharts
 */
import { ChartModule } from 'angular-highcharts';

const modules: Array<any> = [
  SwiperModule,
  MatCardModule,
  ChartModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ]
})
export class SharedModule {
}