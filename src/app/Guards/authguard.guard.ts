import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RootserviceService} from'./../rootservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor (private authService:RootserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      console.log(this.authService.currentUserValue);

      if(this.authService.currentUserValue.authenticate=='authenticate'){
        this.router.navigate(['/login']);
        return false;
      }else{

        return true;
      }
   
  }
  
}
