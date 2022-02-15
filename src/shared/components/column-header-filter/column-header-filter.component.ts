import {
  AfterViewInit,
  Component, ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges, TemplateRef,
  ViewChild
} from '@angular/core';
import { ColumnFilter } from 'primeng/table';

@Component({
  selector: 'pv-column-header-filter',
  templateUrl: './column-header-filter.component.html',
  styleUrls: ['./column-header-filter.component.scss']
})
export class ColumnHeaderFilterComponent implements AfterViewInit, OnChanges {

  constructor() {
  }

  static defaultFilteredWasSet = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();
  @Input() data: any[] = [];
  @Input() enableSearch = false;
  selectedValue = '';
  @Input() field = '';
  @Input() defaultFilterValue = '';
  @Input() headerLabel = '';
  @ViewChild(ColumnFilter) columnFilterRef: ColumnFilter = {} as any;
  @ContentChild('listItem') listItem?: TemplateRef<any>;
  filterIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
  </svg>`;

  ngAfterViewInit(): void {

    this.columnFilterRef.el.nativeElement.querySelector('button')
      .classList.remove('p-column-filter-menu-button-open');
    const pi = this.columnFilterRef.el.nativeElement.querySelector('.pi');
    pi.classList.remove('pi-filter');
    pi.innerHTML = this.filterIconSVG;
    this.data = !this.data || !this.data.length ? this.columnFilterRef.dt.value : this.data;
    this.setDefaultFilters();
  }

  onSelectOption($event: any, filterCallback: Function): void {
    this.selectedValue = $event.value !== 'any' && $event.value !== this.selectedValue ? $event.value : null;
    filterCallback(!this.selectedValue ? null : [this.selectedValue]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDefaultFilters();
  }

  setDefaultFilters(): void {
    if (this.defaultFilterValue) {
      ColumnHeaderFilterComponent.defaultFilteredWasSet = !ColumnHeaderFilterComponent.defaultFilteredWasSet ?
        !!this.defaultFilterValue : ColumnHeaderFilterComponent.defaultFilteredWasSet;

      this.columnFilterRef &&
      this.columnFilterRef.dt &&
      this.columnFilterRef.dt.filter(this.defaultFilterValue ? [this.defaultFilterValue] : '', this.field, 'in');
    }
  }

  clickFilter(event: MouseEvent): void {
    if (ColumnHeaderFilterComponent.defaultFilteredWasSet) {
      this.columnFilterRef.dt.reset();
      ColumnHeaderFilterComponent.defaultFilteredWasSet = false;
    }
  }

}
