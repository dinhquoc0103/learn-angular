import { Component, OnInit } from '@angular/core';
import { moviesData } from '../../data/movies-data';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor() { }

  ngOnInit(): void {
    this.movies = moviesData;
  }

}
