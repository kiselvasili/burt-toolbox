import { Component, Input, ViewChild } from '@angular/core';

import { Chart, Highcharts } from 'angular-highcharts';

@Component({
  selector: 'pie-hc',
  templateUrl: 'pie-hc.component.html',
  styleUrls: ['pie-hc.component.scss']
})
export class PieHCComponent {

  @Input('params') params;
  
  public chart: Chart;

  ngOnInit() {
    this.init();
  }

  init() {
    let chart = new Chart({
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.params,
      }]
    });
    this.chart = chart;
  }

}