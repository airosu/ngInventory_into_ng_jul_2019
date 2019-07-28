import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [MovieItemComponent, MovieListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [MovieListComponent]
})
export class MoviesModule { }
