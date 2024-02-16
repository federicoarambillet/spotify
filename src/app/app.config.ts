import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptor/inject-session.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    }
  ]
};
