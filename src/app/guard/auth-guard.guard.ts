import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  try {
    const token = localStorage.getItem('token');

    if (!token) {
      router.navigate(['/login']);
      return false;
    } else {
      return true;

    }

  } catch (error) {
    // invalid JSON or corrupted data
    router.navigate(['/login']);
    return false;
  }
};