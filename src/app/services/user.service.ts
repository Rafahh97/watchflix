import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.api+'user/';

  constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.httpCliente.get<User[]>(this.url);
  }

  public get(id: User): Observable<User> {
    return this.httpCliente.get<User>(this.url+id);
  }

  public add(user: User): Observable<any> {
    const userPost = JSON.stringify(user);
    return this.httpCliente.post(this.url, userPost, httpOptions);
  }

  public checkLogin(user: User): Observable<User[]> {
    return this.httpCliente
            .get<User[]>(this.url+'?email='+user.email+'&senha='+user.senha);
  }
}
