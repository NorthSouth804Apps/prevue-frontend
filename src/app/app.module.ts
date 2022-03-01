import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from "../core/state";
import { EffectsModule } from "@ngrx/effects";
import { MenusEffects } from "../core/state/menus";
import { TodoListService } from "../core/services/example.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([MenusEffects])
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
