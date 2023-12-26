import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AppStateService } from './app-state.service';
import { finalize } from 'rxjs';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const appState = inject(AppStateService);

  console.log("Interceptor added successfully !");
  appState.productsState.status = "LOADING"
  let request = req.clone({
    headers: req.headers.set("Authorization", "Tetst")
  });
  return next(request).pipe(
    finalize(()=> {
      appState.productsState.status = "LOADED"
  }));
};
