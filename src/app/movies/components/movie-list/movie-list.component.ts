import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/movie';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'ngi-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  @ViewChild('searchField', { static: true }) searchField;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
    fromEvent(this.searchField.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value)
      )
      .subscribe(searchTerm => {
        this.movieService.searchMovie(searchTerm);
      });
  }

  handleCommentUpdate(commentPayload) {
    this.movieService.updateComment(
      commentPayload.id,
      commentPayload.newComment
    );
  }

  handleMovieDelete(movieId) {
    this.movieService.deleteMovie(movieId);
  }
}
