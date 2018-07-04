import { Component, Input, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'basis-line-hc',
  templateUrl: 'basis-line-hc.component.html',
  styleUrls: ['basis-line-hc.component.scss']
})
export class BasisLineHCComponent {

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
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },
    
      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },
    
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
    
      series: this.params,
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });

    this.chart = chart;
  }
}