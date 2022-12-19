import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() maxPage = 1;
  @Input() page = 1;
  @Input() link: string = '/';
  numbers: number[] | undefined;
  isEllipsis = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url.includes('type=TOP_100_POPULAR_FILMS')) this.maxPage = 20;
    this.numbers = Array(this.maxPage).fill(undefined, 0).map((_, index) => index + 1);
  }

  isLinkActive(num: number): boolean {
    const reg = new RegExp('page=' + num + '(\&|$)');
    if (!this.router.url.includes('page') && num === 1) return true;
    return !!(this.router.url.search(reg) + 1);
  }
}
