import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', component: MovieGridComponent },
  { path: ':id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }


