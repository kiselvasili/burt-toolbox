import { Component, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'column-multi-hc',
  templateUrl: 'column-multi-hc.component.html',
  styleUrls: ['column-multi-hc.component.scss']
})
export class ColumnMultiHCComponent {

  chart: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3]
        },
        {
          name: 'Line 2',
          data: [3, 4, 1]
        }
      ]
    });
    this.chart = chart;
  }
}