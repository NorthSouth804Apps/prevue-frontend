import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from '../core/state';
import { EffectsModule } from '@ngrx/effects';
import { MenusEffects } from '../core/state/menus';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseService } from '../core/services/base.service';
import { AuthService } from '../core/services/auth.service';
import { ToastService } from '../core/services/toast.service';
import { AuthEffects } from '../core/state/auth';
import { MessageService } from 'primeng/api';
import { ReportEffects } from '../core/state/reports';
import { ReportService } from '../core/services/report.service';
import { AuthInterceptor } from '../utils/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([MenusEffects, AuthEffects, ReportEffects]),
  ],
  providers: [
    BaseService,
    AuthService,
    ToastService,
    MessageService,
    ReportService,
    // auth interceptor to add the token to each request
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
