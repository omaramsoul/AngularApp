import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appHttpInterceptor } from './services/app-http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(withHttpTransferCacheOptions({includeHeaders: ['x-total-count']})),
    provideHttpClient(),
    provideHttpClient(withInterceptors([appHttpInterceptor]))
  ]
};
