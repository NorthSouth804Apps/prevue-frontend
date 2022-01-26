import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import {TreeModule} from 'primeng/tree';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [MainComponent, SidebarComponent],
  imports: [
    MainRoutingModule,
    SidebarModule,
    TreeModule,
    ButtonModule,
  ],
  providers: []
})
export class MainModule {
}

