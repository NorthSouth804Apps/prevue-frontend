import { NgModule } from "@angular/core";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { ChartModule } from "primeng/chart"

@NgModule({
  declarations: [LineChartComponent],
  imports: [ChartModule],
  exports: [LineChartComponent],
  providers: [],
})
export class SharedModule {
}
