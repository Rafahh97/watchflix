import { Component, OnInit } from '@angular/core';
import { mainShows } from '../models/main-shows';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
