import {Component, Input} from '@angular/core';
import {AppEndpoints} from '../../../router/router.constants';
import {ISimilarMovie} from '../../../api/types';

@Component({
  selector: 'app-similars-card',
  templateUrl: './similars-card.component.html',
  styleUrls: ['./similars-card.component.scss']
})
export class SimilarsCardComponent {
  link = AppEndpoints.MOVIES;
  @Input() movie: ISimilarMovie | null = null;

}
