import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { ChartModule } from 'primeng/chart';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MetricContainerComponent } from './components/metric-container/metric-container.component';
import { ColumnHeaderFilterComponent } from './components/column-header-filter/column-header-filter.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { UniqueValuesArrayElementsPipe } from './pipes/unique-values-array-elements.pipe';
import { CalcPercentPipe } from './pipes/calc-percent.pipe';
import { ConcatValuesPipe } from './pipes/concat-values.pipe';
import { FindPipe } from './pipes/find.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ButtonComponent } from './components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListComponent } from "./components/list/list.component";
import { ConfirmationService } from "primeng/api";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    LineChartComponent,
    MetricContainerComponent,
    ColumnHeaderFilterComponent,
    ClickOutsideDirective,
    UniqueValuesArrayElementsPipe,
    CalcPercentPipe,
    ConcatValuesPipe,
    FindPipe,
    IconComponent,
    ButtonComponent,
    ListComponent,
  ],
  imports: [
    ChartModule,
    ListboxModule,
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    IconSpriteModule,
    ButtonModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
  ],
  exports: [
    LineChartComponent,
    MetricContainerComponent,
    ColumnHeaderFilterComponent,
    ClickOutsideDirective,
    UniqueValuesArrayElementsPipe,
    CalcPercentPipe,
    ConcatValuesPipe,
    FindPipe,
    IconComponent,
    ButtonComponent,
    ListComponent,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    CommonModule,
    ConfirmDialogModule,
  ],
  providers: [
    ConfirmationService,
  ],
})
export class SharedModule {}
