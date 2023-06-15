import { Injectable } from '@angular/core';
import { moviesData } from 'src/app/data/movies-data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovieById(movieId: number) {
    return moviesData.find(item => item.id === movieId);
  }
}
