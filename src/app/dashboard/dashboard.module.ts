import { SharedModule } from './../shared/shared.module';

/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routes';
import { ChartFactoryModule } from './chart-factory/chart-factory.module';

/**
 * Components
 */
import { DashboardComponent } from './dashboard.component';

export const components: any[] = [
	DashboardComponent
];

@NgModule({
	declarations: [
		...components,
	],
	imports: [
		DashboardRoutingModule,
		ChartFactoryModule,
		SharedModule
	]
})
export class DashboardModule { }