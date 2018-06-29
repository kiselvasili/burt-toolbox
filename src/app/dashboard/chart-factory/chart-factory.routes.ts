import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import { ChartFactoryComponent } from './chart-factory.component';

export const chartFactoryRoutes: Routes = [
	{
		path: 'chart',
    component: ChartFactoryComponent,
	}
];
