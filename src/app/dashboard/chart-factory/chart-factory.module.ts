import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

/**
 * Components
 */
import { ChartFactoryComponent } from './chart-factory.component';
import { ChartPieDragComponent } from './chart-pie-drag/chart-pie-drag.component';
import { ChartPieComponenet } from './chart-pie/chart-pie.component';
import { ColumnAxisBreakComponent } from './column-axis-break/column-axis-break.component';
import { ColumnMultiHCComponent } from './column-multi-hc/column-multi-hc.component';
import { PieHCComponent } from './pie-hc/pie-hc.component';
import { PieDonutHCComponent } from './pie-donut-hc/pie-donut-hc.component';
import { BasisAreaHCComponent } from './basis-area-hc/basis-area-hc.component';
import { BasisLineHCComponent } from './basis-line-hc/basis-line-hc.component';

export const components: any[] = [
	ChartFactoryComponent,
	ChartPieDragComponent,
	ColumnAxisBreakComponent,
	ChartPieComponenet,
	ColumnMultiHCComponent,
	PieHCComponent,
	PieDonutHCComponent,
	BasisAreaHCComponent,
	BasisLineHCComponent,
];

@NgModule({
	declarations: [
		...components,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
		...components,
	]
})
export class ChartFactoryModule { }