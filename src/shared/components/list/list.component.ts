import { Component, OnInit, Input, Output, ContentChild, EventEmitter, TemplateRef } from "@angular/core";

@Component({
  selector: 'pv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> {
  @Output() click: EventEmitter<T> = new EventEmitter<T>();
  @Input() class = '';
  @Input() data: T[] = [];
  @Input() columns: (keyof T)[] = [];
  @Input() bigger = false;
  @Input() pointer?: boolean;
  @Input() loading?: boolean;
  @ContentChild('listItem') listItem?: TemplateRef<any>;


  constructor() {
  }

  onClickItem($event: any, item: T): void  {
    $event.stopPropagation();
    this.click.emit(item);
  }
}
