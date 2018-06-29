import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { DashboardRoutingModule } from './dashboard.routes';

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
	]
})
export class DashboardModule { }