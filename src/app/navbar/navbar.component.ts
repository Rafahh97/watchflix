import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.body.style.backgroundColor = "white";
  }

}
