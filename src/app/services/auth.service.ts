import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User.service';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAutenticado: boolean = false;

    constructor(private userServ: UserService,
                private rota: Router) { }

    public logar(user: User) {

        this.userServ.checkLogin(user).subscribe((users: User[])=>{
            const [ user ] = users;

            console.log(user);

            if (user) {
                this.isAutenticado = true;
                this.rota.navigate(['/mainpage']);
            }

        });

    }

    public getAutenticado() {
        return this.isAutenticado;
    }
}