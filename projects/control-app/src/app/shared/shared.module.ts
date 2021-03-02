import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { DformComponent } from './dform/dform.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [LoadingComponent, DformComponent, FiltersComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatCardModule,
    MatButtonModule,

    // local
    LoadingComponent, DformComponent, FiltersComponent
  ]
})
export class SharedModule { }
