import { Component, OnInit } from '@angular/core';
import { mainShows } from '../models/main-shows';
import { MainShowsService } from '../services/main-shows.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public mainshow: Array<mainShows> = [];

  constructor( private mainshows: MainShowsService ) { }

  ngOnInit(): void {
    this.mainshow = this.mainshows.getAll()
  }
  
  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

}
