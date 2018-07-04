import { Component, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'pie-donut-hc',
  templateUrl: 'pie-donut-hc.component.html',
  styleUrls: ['pie-donut-hc.component.scss']
})
export class PieDonutHCComponent {

  chart: Chart;

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
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: 0,
          endAngle: 360,
          center: ['50%', '50%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Chrome', 58.9],
          ['Firefox', 13.29],
          ['Internet Explorer', 13],
          ['Edge', 3.78],
          ['Safari', 3.42],
          {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });

    this.chart = chart;
  }
}