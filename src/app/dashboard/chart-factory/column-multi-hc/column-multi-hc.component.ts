import { Component, Input, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'column-multi-hc',
  templateUrl: 'column-multi-hc.component.html',
  styleUrls: ['column-multi-hc.component.scss']
})
export class ColumnMultiHCComponent {

  @Input('params') params;

  public chart: Chart;

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
      exporting: {
        enabled: false
      },
      series: this.params,
    });
    this.chart = chart;
  }
}