import { NgModule } from "@angular/core";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { ChartModule } from "primeng/chart"
import { ListboxModule } from "primeng/listbox"
import { TableModule } from "primeng/table"
import { MetricContainerComponent } from "./components/metric-container/metric-container.component";
import { ColumnHeaderFilterComponent } from "./components/column-header-filter/column-header-filter.component";
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { UniqueValuesArrayElementsPipe } from "./pipes/unique-values-array-elements.pipe";
import { CalcPercentPipe } from "./pipes/calc-percent.pipe";
import { ConcatValuesPipe } from "./pipes/concat-values.pipe";
import { FindPipe } from "./pipes/find.pipe";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [ChartModule, ListboxModule, TableModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    LineChartComponent,
    MetricContainerComponent,
    ColumnHeaderFilterComponent,
    ClickOutsideDirective,
    UniqueValuesArrayElementsPipe,
    CalcPercentPipe,
    ConcatValuesPipe,
    FindPipe,
  ],
  providers: [],
})
export class SharedModule {
}
