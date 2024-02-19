import { Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuardFunctional = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const token: boolean = cookieService.check('token');
    if (!token) {
      router.navigate(['/', 'auth']);
    }
    return token;
  } catch (e) {
    return false;
  }
}