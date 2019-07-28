import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [MovieItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [MovieItemComponent]
})
export class MoviesModule { }
