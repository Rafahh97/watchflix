import { Injectable } from '@angular/core';
import { Titulos } from '../models/titulo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TitlesService {
  private url: string = environment.api+'movies/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Titulos[]> {
    return this.httpClient.get<Titulos[]>(this.url);
  }

  public get(id: number): Observable<Titulos> {
    return this.httpClient.get<Titulos>(this.url+id);
  }

  public add(title: Titulos) {
    const titlePost = JSON.stringify(title);
    return this.httpClient.post(this.url,titlePost,httpOptions);

  }

  public edit(title: Titulos) : Observable<Object> {
    const titlePost = JSON.stringify(title);
    return this.httpClient.put(this.url+title.id,titlePost,httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.url+id);
  }
 
}
