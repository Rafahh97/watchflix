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

  public catalogo1: Array<Titulos> = [];
  public catalogo2: Array<Titulos> = [];
  constructor( private cat1: TitlesService, private cat2: TitlesService) { }

  ngOnInit(): void {
    this.catalogo1 = this.cat1.getAllOne()
    this.catalogo2 = this.cat2.getAllTwo()
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
       items: 7
     }
   },
 };
}