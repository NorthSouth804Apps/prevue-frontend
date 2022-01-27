import { NgModule } from "@angular/core";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { ChartModule } from "primeng/chart"
import { MetricContainerComponent } from "./components/metric-container/metric-container.component";

@NgModule({
  declarations: [LineChartComponent, MetricContainerComponent],
  imports: [ChartModule],
  exports: [LineChartComponent, MetricContainerComponent],
  providers: [],
})
export class SharedModule {
}
