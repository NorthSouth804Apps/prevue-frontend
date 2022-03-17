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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseService } from '../core/services/base.service';
import { AuthService } from '../core/services/auth.service';
import { ToastService } from '../core/services/toast.service';
import { AuthEffects } from '../core/state/auth/auth-state-management';
import { MessageService } from 'primeng/api';
import { ReportEffects } from '../core/state/reports/reports-state-management';
import { AuthInterceptor } from '../utils/interceptors/auth.interceptor';
import { UserEffects } from "../core/state/users/users-state-management";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { AuthGuardService } from "../core/services/auth-guard.service";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

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
    EffectsModule.forRoot([AuthEffects, ReportEffects, UserEffects]),
    InfiniteScrollModule,
  ],
  providers: [
    BaseService,
    AuthService,
    ToastService,
    MessageService,
    // this options are needed to use jwt lib
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuardService,
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
