import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Titulos } from '../models/titulo.model';
import { MainShowsService } from '../services/main-shows.service';
import { TitlesService } from '../services/titles.service';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  public title : Titulos = new Titulos();
  tipos =[
    {

      tipo: "Filme"
    },
    {

      tipo: "Série"
    },
    {

      tipo: "Desenho"
    }
  ]

  constructor(private rota: Router, private titleServ: TitlesService) { }

  ngOnInit(): void {
  }

  public cadastrar() {
      this.titleServ.add(this.title).subscribe((resultado)=>{
      console.log(resultado);
      this.rota.navigate(['/mainpage']);
    });
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  onAddType(){ // Função que foi chamada
    this.title.tipo;
  }

}
