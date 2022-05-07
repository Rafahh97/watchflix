import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Titulos } from '../models/titulo.model';
import { TitlesService } from '../services/titles.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {

  public title : Titulos = new Titulos();
  
  constructor(private rota: Router, private titleServ: TitlesService, private rotaAtiva: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    const codigo:number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.titleServ.get(codigo).subscribe((title: Titulos)=>{
      this.title = title;
    });
  }

  public editar() {
      this.titleServ.edit(this.title).subscribe((resultado)=>{
      console.log(resultado);
      this.rota.navigate(['/mainpage']);
    });
  }

  public excluir(){
    this.titleServ.delete(this.title.id).subscribe((resultado)=>{
      console.log(resultado);
      this.rota.navigate(['/mainpage']);
    });
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}
