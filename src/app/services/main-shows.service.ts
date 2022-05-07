import { Injectable } from '@angular/core';
import { mainShows } from '../models/main-shows';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MainShowsService {


  private url: string = environment.api+'main-show/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<mainShows[]> {
    return this.httpClient.get<mainShows[]>(this.url);
  }

  public get(id: number): Observable<mainShows> {
    return this.httpClient.get<mainShows>(this.url+id);
  }

  public add(mainShow: mainShows) {
    const mainShowsPost = JSON.stringify(mainShow);
    return this.httpClient.post(this.url,mainShowsPost,httpOptions);

  }

  public edit(title: mainShows) {
    const mainShowsPost = JSON.stringify(title);
    return this.httpClient.put(this.url,mainShowsPost,httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.url+id);
  }
 
}
