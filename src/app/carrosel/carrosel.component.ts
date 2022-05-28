import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Titulos } from '../models/titulo.model';
import { TitlesService } from '../services/titles.service';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent implements OnInit {

  public catalogo: Array<Titulos> = [];
  constructor( private titlesService: TitlesService) { }

  ngOnInit(): void {
    this.titlesService.getAll().subscribe((movies: Titulos[])=>{
       this.catalogo = movies;
    });
  }
  
 customOptions: OwlOptions = {
   loop: false,
   rewind: true,
   mouseDrag: true,
   touchDrag: false,
   pullDrag: true,
   dots: true,
   margin: 7,
   nav: false,
   navSpeed: 600,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 2
     },
     400: {
       items: 3
     },
     760: {
       items: 6
     },
     1000: {
       items: 8
     }
   },
 };
}