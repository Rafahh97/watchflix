import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }

  public realizarLogin() {
    this.authServ.logar(this.user);
  }

}

