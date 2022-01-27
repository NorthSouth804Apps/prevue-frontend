import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pv-metric-container',
  templateUrl: './metric-container.component.html',
  styleUrls: ['./metric-container.component.scss']
})
export class MetricContainerComponent {
  @Input() label?: string;
  @Input() value?: string;
  @Input() bgColor: 'rose' | 'blue' | 'gray' | 'white' = 'white';
  @Input() textColor: 'rose' | 'blue' | 'gray' | 'white' | 'blue-2' = 'blue-2';

  constructor() {}
}
