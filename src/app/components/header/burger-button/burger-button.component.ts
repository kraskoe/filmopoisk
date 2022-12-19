import { Component } from '@angular/core';
import {MainMenuService} from '../../../services/main-menu.service';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss']
})
export class BurgerButtonComponent {
  constructor(public mainMenuService: MainMenuService) {}
}
