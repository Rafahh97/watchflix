import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot,
         CanActivate,
         RouterStateSnapshot
        } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private authServ: AuthService,
                private rota: Router) {}

    public canActivate(route: ActivatedRouteSnapshot, 
         state: RouterStateSnapshot): boolean | Observable<boolean> {
        
        if (this.authServ.getAutenticado()) {
            return true;
        }

        this.rota.navigate(['/login']);
        return false;
    }
}