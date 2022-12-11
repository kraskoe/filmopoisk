import { Component } from '@angular/core';

import {PageType} from '../../api/api.constants';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.scss']
})
export class PopularPageComponent {
  type = PageType.TOP;
}
