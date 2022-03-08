import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pv-metric-container',
  templateUrl: './metric-container.component.html',
  styleUrls: ['./metric-container.component.scss']
})
export class MetricContainerComponent {
  @Input() styleClass?: string;
  @Input() label?: string;
  @Input() value?: number;
  @Input() loading?: boolean;
  @Input() bgColor: 'rose' | 'blue' | 'gray' | 'white' = 'white';
  @Input() textColor: 'rose' | 'blue' | 'gray' | 'white' | 'blue-2' = 'blue-2';
  @Output() onClick = new EventEmitter();

  constructor() {}

  clicking($event: any) {
    this.onClick.emit($event);
  }
}
