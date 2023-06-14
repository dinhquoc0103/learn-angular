import { Component, OnInit } from '@angular/core';
import { moviesData } from '../../data/movies-data';


interface Movie {
  id: number;
  name: string;
  thumb: string;
}

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
