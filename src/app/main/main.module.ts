import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
  ],
  providers: []
})
export class MainModule {
}
