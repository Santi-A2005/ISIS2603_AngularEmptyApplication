import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  imports: [
    CommonModule,
    SeriesComponent,
    SeriesListComponent
  ],
  declarations: [],
})
export class SeriesModule { }