import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// adding persist option to ngrx state data
// import {
//   getAllDataFromLocalForage,
//   default as localForage,
// } from 'ngrx-store-persist';


// getAllDataFromLocalForage({
//   driver: localForage.LOCALSTORAGE,
//   keys: [
//     'auth',
//   ],
// }).then(() => {
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch(err => console.log(err));
// });


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

