import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import {TreeModule} from 'primeng/tree';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from "../../shared/shared.module";
import { ToastService } from "../../core/services/toast.service";
import { ReportFacadeService } from "../../core/services/facades/report-facade.service";
import { HomeFacadeService } from "../../core/services/facades/home-facade.service";


@NgModule({
  declarations: [MainComponent, SidebarComponent],
  imports: [
    MainRoutingModule,
    SidebarModule,
    TreeModule,
    ButtonModule,
    SharedModule
  ],
  providers: [ToastService, ReportFacadeService, HomeFacadeService]
})
export class MainModule {
}

