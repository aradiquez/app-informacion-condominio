import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
  }

  login() {
    this.auth.login(this.model.username, this.model.password)
      .subscribe(data => {
        this.router.navigate(['main']);
      },
      error => {
        console.log(error);
        this.loading = false;
      });
  }
}
