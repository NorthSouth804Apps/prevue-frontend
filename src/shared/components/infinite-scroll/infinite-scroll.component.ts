import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'pv-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @Output() onScrollDown = new EventEmitter();
  @Output() onScrollUp = new EventEmitter();
  @Input() scrollThrottle = 50;
  @Input() disableScroll?: boolean;
  enableGoUp?: boolean;
  height = 1000;
  constructor() {}

  ngOnInit() {}

  onScrollUpHandler($event: any) {
    this.onScrollUp.emit($event);
  }

  onScrollDownHandler($event: any) {
    this.onScrollDown.emit($event);
    this.height = this.height + 200;
  }

  goUp() {
    window.scrollTo({ top: 0 })
  }
  @HostListener('window:scroll', [])
  toggleGoUpButton(data: any) {
    this.enableGoUp = window.scrollY >= 1000;
  }
}
