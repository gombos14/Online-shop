import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ShortUser } from '../model/user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: UsersService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(user: ShortUser) {
    this.service.login(user).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/products']);
        this.snackbar.open('Logged in');
      },
      (error) => this.snackbar.open('Login failed')
    );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
