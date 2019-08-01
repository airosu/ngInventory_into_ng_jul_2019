import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from '../movies/components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [MovieItemComponent, MovieListComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: 'new',
        component: MovieDetailComponent
      },
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ])
  ],
  exports: [MovieListComponent]
})
export class MoviesModule {}
