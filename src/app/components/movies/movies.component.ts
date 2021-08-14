import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies)=> this.movies = movies)
  }

}
