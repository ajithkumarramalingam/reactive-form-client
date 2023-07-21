import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3000/reactive/';
  constructor(private http: HttpClient) { }
  insert (payloads:any) {
    return this.http.post(this.url+ 'insert', payloads);
  }
}
