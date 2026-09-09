import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DummyGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const auth = route.queryParamMap.get('auth');
    const allowedAuth = route.data['allowedAuth'] as string[] | undefined;

    return auth !== null && allowedAuth?.includes(auth) === true;
  }
}
