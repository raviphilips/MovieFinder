import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MoviesService} from '../../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	movie: Object;

  constructor(
  		private router:ActivatedRoute,
  		private _moviesService:MoviesService){

  }

  ngOnInit() {
  	  this.router.params.subscribe((params) =>{
  	  	let id = params['id'];
  	  	this._moviesService.getMovie(id).subscribe(movie => {
  	  		this.movie = movie;
  	  	});
  	  });
  }

}
