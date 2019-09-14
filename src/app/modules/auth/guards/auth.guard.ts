import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('loginned') === 'false') {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
