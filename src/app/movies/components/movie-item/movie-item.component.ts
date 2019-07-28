import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie;
  commentSaved;

  // saveComment(id) {
  //   const theMovie = this.movies.find(movie => movie.id === id);
  //   theMovie.commentSaved = !theMovie.commentSaved;
  // }

  wordCount(comment) {
    if (!comment || comment.length === 0) {
      return 0;
    } else {
      return comment
        .trim()
        .replace(/  +/g, ' ')
        .split(' ').length;
    }
  }
}
