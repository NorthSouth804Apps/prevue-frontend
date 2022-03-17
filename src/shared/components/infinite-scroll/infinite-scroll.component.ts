import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pv-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @Output() onScrollDown = new EventEmitter();
  @Output() onScrollUp = new EventEmitter();
  @Input() scrollThrottle = 50;
  height = 2000;
  ngOnInit() {}

  onScrollUpHandler($event: any) {
    this.onScrollUp.emit($event);
  }

  onScrollDownHandler($event: any) {
    this.onScrollDown.emit($event);
    this.height = this.height + 200;
  }

  constructor() {}
}
