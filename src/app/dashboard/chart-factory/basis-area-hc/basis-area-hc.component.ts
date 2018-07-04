import { Component, Input, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'basis-area-hc',
  templateUrl: 'basis-area-hc.component.html',
  styleUrls: ['basis-area-hc.component.scss']
})
export class BasisAreaHCComponent {

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
        type: 'area'
      },
      title: {
        text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
        text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
          'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          'armscontrol.org</a>'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + 'k';
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: this.params,
    });
    this.chart = chart;
  }
}