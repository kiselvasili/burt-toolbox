import { NgModule } from '@angular/core';

/**
 * Components
 */
import { ChartFactoryComponent } from './chart-factory.component';

export const components: any[] = [
	ChartFactoryComponent
];

@NgModule({
	declarations: [
		...components,
	],
	imports: []
})
export class ChartFactoryModule { }