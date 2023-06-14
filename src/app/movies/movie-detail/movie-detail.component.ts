import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { moviesData } from '../../data/movies-data';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  name: string = '';
  thumb: string = '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let movieId = Number(params.get('id'));
      const movie = moviesData.find((movie) => movie.id === movieId);
      if (movie) {
        this.name = movie.name;
        this.thumb = movie.thumb;
      }
    })
  }

}
