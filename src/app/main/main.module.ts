import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import {TreeModule} from 'primeng/tree';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [MainComponent, SidebarComponent],
  imports: [
    MainRoutingModule,
    SidebarModule,
    TreeModule,
    ButtonModule,
    SharedModule
  ],
  providers: []
})
export class MainModule {
}

