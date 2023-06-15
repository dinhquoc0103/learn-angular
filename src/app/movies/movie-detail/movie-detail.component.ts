import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = {
    id: 0,
    name: '',
    thumb: '',
  };

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let movieId = Number(params.get('id'));
      const movieObj = this.moviesService.getMovieById(movieId);
      console.log(movieObj);

      if (movieObj) {
        this.movie = movieObj;
      }
    })
  }

}
