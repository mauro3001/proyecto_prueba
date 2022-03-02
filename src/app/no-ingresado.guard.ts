import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
  constructor(public navCtrl: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('ingresado')){
      if(localStorage.getItem('tipoUser')==='transportador'){
        this.navCtrl.navigateRoot('inicio-transportador');
      }
      if(localStorage.getItem('tipoUser')==='vendedor'){
        this.navCtrl.navigateRoot('inicio-vendedor');
      }
      else{
        this.navCtrl.navigateRoot('menu/inicio-comprador');
      }
      return false;
    }else{
      return true;
    }
  }
}
