import { Injectable } from '@angular/core';
import { mainShows } from '../models/main-shows';

@Injectable({
  providedIn: 'root'
})
export class MainShowsService {

  public mainshows: Array<mainShows> = [
    {
      id: 0,
      nome: 'Sherlock',
      foto: './../../assets/img-mock/sherlock.jpg'
    },
    {
      id: 1,
      nome: 'Bridgerton',
      foto: './../../assets/img-mock/bridgerton.jpg'
    },
    {
      id: 2,
      nome: 'My name',
      foto: './../../assets/img-mock/myname.jpg'
    },
  ];
  constructor() { }

  public getAll(): Array<mainShows> {
    return this.mainshows;
  }

  public get(id: number): mainShows {
    for (let obj of this.mainshows) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new mainShows();
  }

  public add(show: mainShows) {
    show.id = this.mainshows.length;
    this.mainshows.push(show);
  }

  public edit(show: mainShows) {
    for(let obj of this.mainshows) {
      if (show.id === obj.id) {
        obj.nome = show.nome;
        obj.foto = show.foto;
        break;
      }
    }
  }

  public delete(id: number) {
    let posicao = 0;
    
    posicao = this.mainshows.findIndex( (show) => id === show.id );

    this.mainshows.splice(posicao, 1);

  }

}
