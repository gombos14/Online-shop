import { Injectable } from '@angular/core';
import { BackendService } from '../../backend/backend.service';
import { ShortUser, UserData } from './model/user-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  api = 'http://localhost:3000';
  loginEndpoint = 'login';
  constructor(private service: BackendService) {}

  login(user: ShortUser): Observable<UserData> {
    return this.service.post(`${this.api}/${this.loginEndpoint}`, user);
  }
}
