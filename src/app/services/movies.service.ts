import { Injectable } from '@angular/core';
import { Jsonp} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class MoviesService {
	apikey: string;

  constructor(private _jsonp:Jsonp) {

  		this.apikey = '7b4becfa508f20df4d067149beab3d0a';

  		console.log('MovieService Initialized.....');

   }

  /* getPopular(){
   	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularty.desc@api_key='+this.apikey)
      .map(res => res.json());

   }*/

    getPopular(){
   	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&page=1&sort_by=popularity.desc&language=en-US&api_key='+this.apikey)
      .map(res => res.json());

   }



  getInTheaters(){
   	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-07-15&primary_release_date.lte=2017-8-20&api_key='+this.apikey)
      .map(res => res.json());

   }

   searchMovies(searchStr: string){
   		return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());

   }

 getMovie(id:string){
   	return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
      .map(res => res.json());

   }   

}
