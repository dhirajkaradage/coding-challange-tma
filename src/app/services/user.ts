import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface UserI {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: number;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  readonly apiUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
  http = inject(HttpClient);

  getAllUserList(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.apiUrl);
  }
}
