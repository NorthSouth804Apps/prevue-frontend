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


  ngAfterViewInit(): void {

    this.columnFilterRef.el.nativeElement.querySelector('button')
      .classList.remove('p-column-filter-menu-button-open');
    const pi = this.columnFilterRef.el.nativeElement.querySelector('.pi');
    pi.classList.remove('pi-filter');
    pi.classList.add('pi-angle-down');
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
