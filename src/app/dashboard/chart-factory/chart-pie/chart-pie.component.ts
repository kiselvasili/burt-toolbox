import { Component, Input, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-chart-pie',
  templateUrl: 'chart-pie.component.html',
  styleUrls: ['chart-pie.component.scss'],
})
export class ChartPieComponenet {
  @Input('params') params;

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    var chart = am4core.create("chart-pie", am4charts.PieChart);

    // chart.legend = new am4charts.Legend();
    console.log(chart.legend);

    chart.data = this.params;

    chart.innerRadius = am4core.percent(40);

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}