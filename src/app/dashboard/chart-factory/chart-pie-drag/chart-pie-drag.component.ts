import { Component, Input, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-chart-pie-drag',
  templateUrl: 'chart-pie-drag.component.html',
  styleUrls: ['chart-pie-drag.component.scss'],
})
export class ChartPieDragComponent {
  public _params;

  @Input('params') 
  set params(val) {
    console.log('val', val);
    this._params = val;
  };

  get params() {
    return this._params;
  }

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chart-pie-drag", am4charts.PieChart);

      am4core.useTheme(am4themes_animated);

      chart.data = this.params;
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(30);
      chart.startAngle = 180;
      chart.endAngle = 360;

      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";
      series.alignLabels = false;

      series.slices.template.cornerRadius = 4;
      series.slices.template.innerCornerRadius = 4;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;

      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;

      chart.legend = new am4charts.Legend();
      console.log(chart.legend);
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}