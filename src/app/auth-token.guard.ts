import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from './auth-service/auth-service.service';

@Injectable()
export class AuthTokenGuard implements CanActivate {

  constructor(
    private router: Router ,
    private authService: AuthServiceService
  ) { }
  authToken: string ;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authToken = this.authService.getAuthToken();
      if (this.authToken) {
        return true;
      }else {
        this.router.navigate(['unauthorized']);
      }
  }
}
