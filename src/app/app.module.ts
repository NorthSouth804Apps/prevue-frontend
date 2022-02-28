import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
