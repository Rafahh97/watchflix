import { Injectable } from '@angular/core';
import { Titulos } from '../models/titulo.model';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {
  public catalogo1: Array<Titulos> = [
    {
      id :  1,
      capa:'https://k4us.com.br/wp-content/uploads/2020/05/bof_capa.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      capa:'https://i.pinimg.com/236x/45/6d/53/456d53ebf44283d7a763f51d6bd42f6c.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      capa:'https://media.fstatic.com/ICw5hz6TO7Mu3XuLEbEUkN42kXs=/290x478/smart/media/movies/covers/2019/11/EIgwoK1VAAMRKvo.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      capa:'https://teoriageek.com.br/wp-content/uploads/2021/02/FICHA-TECNICA-IMAGEM-min.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      capa:'https://pm1.narvii.com/6447/c8aecf13718c6b8de5055479876512a9a12a148a_hq.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      capa:'https://presleyson.com.br/wp-content/uploads/2019/02/mr-robot-800x800-min.jpg?a7c535&a7c535',
      alt:'Side 6',
      title:'Side 6'
    },
    {
      id: 7,
      capa:'https://i.pinimg.com/236x/72/78/15/7278154c5b226d6a753341a5b6d66969--watch-greys-anatomy-greys-anatomy-season.jpg',
      alt:'Side 7',
      title:'Side 7'
    },
    {
      id: 8,
      capa:'https://i.pinimg.com/474x/25/12/5c/25125c83576ee3af5036d8aad90970fc.jpg',
      alt:'Side 8',
      title:'Side 8'
    },
    
  ]
  public catalogo2: Array<Titulos> = [
    {
      id :  1,
      capa:'https://s2.glbimg.com/XB79hteOI21lG_EWJlZS_pU_1Ds=/top/e.glbimg.com/og/ed/f/original/2018/04/23/1_sJdmoN3.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      capa:'https://media.fstatic.com/bzvMUY5tNTucI5Z1OKwRnfb-PnU=/268x386/smart/media/movies/covers/2018/07/19894818.jpg-r_1280_720-f_jpg-q_x-xxyxx.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      capa:'https://images-na.ssl-images-amazon.com/images/I/81arD48HpRL.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      capa:'https://images-na.ssl-images-amazon.com/images/I/91++nYXJ5dL.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      capa:'http://3.bp.blogspot.com/-kgrtKvnbhyc/ToXjwM2bhkI/AAAAAAAABfE/A9Bw8v2r1qQ/s1600/Harry+Potter+e+as+Rel%25C3%25ADquias+da+Morte+Parte+2+Luva.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      capa:'https://br.web.img3.acsta.net/pictures/19/03/05/08/39/2850939.jpg',
      alt:'Side 6',
      title:'Side 6'
    },
    {
      id: 7,
      capa:'https://http2.mlstatic.com/D_NQ_NP_861347-MLB25850572152_082017-O.jpg',
      alt:'Side 7',
      title:'Side 7'
    },
    {
      id: 8,
      capa:'https://blogdojotace.com.br/wp-content/uploads/2020/03/parasita.jpg',
      alt:'Side 8',
      title:'Side 8'
    },
    
  ]
  constructor() { }

  public getAllOne(): Array<Titulos> {
    return this.catalogo1;
  }

  public getOne(id: number): Titulos {
    for (let obj of this.catalogo1) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Titulos();
  }

  public addOne(title: Titulos) {
    title.id = this.catalogo1.length;
    this.catalogo1.push(title);
  }

  public editOne(show: Titulos) {
    for(let obj of this.catalogo1) {
      if (show.id === obj.id) {
        obj.capa = show.capa;
        obj.alt = show.alt;
        obj.title = show.title
        break;
      }
    }
  }

  public deleteOne(id: number) {
    let posicao = 0;
    
    posicao = this.catalogo1.findIndex( (show) => id === show.id );

    this.catalogo1.splice(posicao, 1);

  }



  public getAllTwo(): Array<Titulos> {
    return this.catalogo2;
  }

  public getTwo(id: number): Titulos {
    for (let obj of this.catalogo2) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Titulos();
  }

  public addTwo(title: Titulos) {
    title.id = this.catalogo2.length;
    this.catalogo2.push(title);
  }

  public editTwo(show: Titulos) {
    for(let obj of this.catalogo2) {
      if (show.id === obj.id) {
        obj.capa = show.capa;
        obj.alt = show.alt;
        obj.title = show.title
        break;
      }
    }
  }

  public deleteTwo(id: number) {
    let posicao = 0;
    
    posicao = this.catalogo2.findIndex( (show) => id === show.id );

    this.catalogo2.splice(posicao, 1);

  }
}
