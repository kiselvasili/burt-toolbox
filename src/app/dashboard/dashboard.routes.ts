import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import { DashboardComponent } from './dashboard.component';

/**
 * Routes
 */
import { chartFactoryRoutes } from './chart-factory/chart-factory.routes';

export const dashboardRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			...chartFactoryRoutes
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(dashboardRoutes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule { }