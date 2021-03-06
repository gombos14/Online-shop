import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'online-shop';
  constructor(private router: Router) {}

  isLoginPage() {
    return this.router.url === '/login';
  }
}
