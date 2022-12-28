import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg attr.width="{{width}}px" attr.height="{{height}}px" attr.fill="{{fill}}" attr.class="{{class}}">
      <use attr.xlink:href="assets/icons/{{icon}}.svg#{{icon}}"></use>
    </svg>
  `,
  styles: [`
    :host.pale svg {
      stroke: var(--color-text-pale);
    }

    :host.inactive svg {
      fill: var(--color-background-light);
    }

    :host.active svg {
      fill: var(--color-primary);
    }

    svg {
      fill: var(--color-secondary);
    }
  `]
})
export class SvgIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 24;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}
