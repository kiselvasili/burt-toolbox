import { NgModule } from '@angular/core';

/**
 * Modules
 */
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
		ChartFactoryModule
	]
})
export class DashboardModule { }