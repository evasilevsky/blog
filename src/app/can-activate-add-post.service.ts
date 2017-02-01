import { Injectable,  } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'app/user.service';

@Injectable()
export class CanActivateAddPost implements CanActivate {

  constructor(
    private userService: UserService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log(this.userService.getRole());
    return this.userService.getRole() === "admin";
  }
}
