import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Here the app module is being imported from the app.module.ts and it is being boot strapped
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
