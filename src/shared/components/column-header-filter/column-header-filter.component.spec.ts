import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnInFilterComponent } from './column-in-filter.component';

describe('ColumnInFilterComponent', () => {
  let component: ColumnInFilterComponent;
  let fixture: ComponentFixture<ColumnInFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnInFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnInFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
