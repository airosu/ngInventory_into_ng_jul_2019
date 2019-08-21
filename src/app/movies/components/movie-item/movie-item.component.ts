import { Component, Input } from '@angular/core';



// presentational component that is only concerned with displaying the data it receives through Inputs.
@Component({
    selector: 'ngi-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {     // Needs to be registered in MoviesModule
    commentSaved:boolean;


    @Input() movie;   // input property called "movie"; i think that movie-list.component.html *ngFor [movie]="movie" is passing each movie in this component



    // saveComment(id:number) {
    //     const theMovie = this.movies.find(movie => movie.id === id);
    //     theMovie.commentSaved = !theMovie.commentSaved;
    // }

    wordCount(comment:string) {
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

