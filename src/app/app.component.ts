import { Component } from '@angular/core';
//import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService} from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent {
  title = 'app works!';
}
